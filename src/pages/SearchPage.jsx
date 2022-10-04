import React, {useEffect, useState} from 'react';
import FormSearchMain from '../components/searchPage/FormSearchMain';
import '../assets/searchPage/searchPage.sass';
import SearchResultSort from '../components/searchPage/searchResultSort';
import FilterSelect from '../components/searchPage/FilterSelect';
import {
    filterCountriesData,
    filterGenresData,
    filterRatingDataLimits,
    filterTypeData,
    filterYearDataLimits, getUrlParams,
} from '../scripts/filterData';
import FilterRange from '../components/searchPage/FilterRange';
import Pagination from '../components/searchPage/Pagination';
import MoviePremiereTapeCard from "../components/MoviePremiereTapeCard";
import {getDataFilms} from '../scripts/fetchData'

const SearchPage = () => {
    const filterType = filterTypeData;
    const filterGenres = filterGenresData;
    const filterCountries = filterCountriesData;
    const yearDataLimits = filterYearDataLimits;
    const ratingDataLimits = filterRatingDataLimits;

    const [allFilms, setAllFilms] = useState([]);
    const [typeView, setTypeView] = useState('min');
    const [paginationAll, setPaginationAll] = useState(1);
    const [searchTitle, setSearchTitle] = useState('');

    const [searchParams, setSearchParams] = useState({
        keyword: '',
        type: 'ALL',
        genres: null,
        countries: null,
        yearData: [1910, 2100],
        ratingData: [0, 10],
        order: 'RATING',
        pagination: 1
    })

    useEffect(() => {
        if(window.location.href.includes('?')) {
            searchAfterLoad();
        };
    }, [])

    const changeTypeSort = data => {
        setSearchParams({...searchParams, order: data})
    };

    const changeTypeView = data => {
        setTypeView(data);
    };

    const changeTypeFilm = data => {
        setSearchParams({...searchParams, type: data});
    };

    const changeGenresFilm = data => {
        setSearchParams({...searchParams, genres: Number(data)});
    };

    const changeCountriesFilm = data => {
        setSearchParams({...searchParams, countries: Number(data)});
    };

    const changeYearData = data => {
        setSearchParams(prevState => ({...prevState, yearData: data}));
    };

    const changeRatingData = data => {
        setSearchParams(prevState => ({...prevState, ratingData: data}));
    };

    const changeCurrentPage = data => {
        setSearchParams(prevState => ({...prevState, pagination: data}));
    };

    const changeSearchName = data => {
        setSearchParams({...searchParams, keyword: data});
    };

    const searchAfterLoad = async () => {
        const objParams = getUrlParams();

        const data = await getDataFilms({
            order: objParams.order || 'RATING',
            type: objParams.type || 'ALL',
            ratingFrom: objParams.ratingFrom || 0,
            ratingTo: objParams.ratingTo || 10,
            yearFrom: objParams.yearFrom || 1910,
            yearTo: objParams.yearTo || 2100,
            genres: objParams.genres || null,
            countries: objParams.countries || null,
            keyword: objParams.keyword.trim() || '',
            page: objParams.page || 1
        });

        changePagination(data);
        changeUrl(data);
        setSearchTitle(objParams.keyword.trim()  || '');

        setSearchParams(prevState => ({
            ...prevState,
            keyword: objParams.keyword || '',
            type: objParams.type || 'ALL',
            genres: Number(objParams.genres) || null,
            countries: Number(objParams.countries) || null,
            yearData: [Number(objParams.yearFrom || 1910), Number(objParams.yearTo || 2100)],
            ratingData: [Number(objParams.ratingFrom || 0), Number(objParams.ratingTo || 10)],
            order: objParams.order || 'RATING',
            pagination: objParams.page || 1,
        }));
    };

    const startSearch = async () => {
        const data = await getDataFilms({
            order: searchParams.order,
            type: searchParams.type,
            ratingFrom: searchParams.ratingData[0],
            ratingTo: searchParams.ratingData[1],
            yearFrom: searchParams.yearData[0],
            yearTo: searchParams.yearData[1],
            genres: searchParams.genres,
            countries: searchParams.countries,
            keyword: searchParams.keyword.trim(),
            page: searchParams.pagination
        })


        changePagination(data);
        changeUrl(data);
        setSearchTitle(searchParams.keyword.trim())
    };

    const changePagination = data => {
        setPaginationAll(data.data.totalPages);
        setAllFilms(data.data.items);
    }

    const changeUrl = data => {
        let newUrl = window.location.protocol + '//' + window.location.host + document.location.pathname + data.request.responseURL.slice('https://kinopoiskapiunofficial.tech/api/v2.2/films'.length);
        window.history.replaceState("", "", newUrl);
    }

    return (
        <main className='container content search-page'>
            <FormSearchMain changeSearchName={changeSearchName} searchName={searchParams.keyword} startSearch={startSearch} />

            <div className='search-page__content'>
                <div className='search-page__filter'>
                    <FilterSelect title={'Тип'} data={filterType} initData={searchParams.type} name={'_type'} changeTypeFilm={changeTypeFilm}/>
                    <FilterSelect title={'Жанр'} data={filterGenres} initData={searchParams.genres} name={'_genres'} changeTypeFilm={changeGenresFilm}/>
                    <FilterSelect title={'Страна'} data={filterCountries} initData={searchParams.countries} name={'_countries'} changeTypeFilm={changeCountriesFilm}/>
                    <FilterRange title={'Год'} data={searchParams.yearData} dataLimits={yearDataLimits} changeYearData={changeYearData}/>
                    <FilterRange title={'Рейтинг'} data={searchParams.ratingData} dataLimits={ratingDataLimits} changeYearData={changeRatingData}/>
                </div>
                <div className='search-page__result'>
                    <div className='search-page__result-wrapper'>
                        <h2 className='search-page__title'>Поиск по:  {searchTitle}</h2>
                        <SearchResultSort typeSort={searchParams.order} changeTypeSort={changeTypeSort} changeTypeView={changeTypeView}/>
                        <div className='search-page__result-carts'>
                            {
                                allFilms.map(item => <MoviePremiereTapeCard key={item.kinopoiskId} posterUrl={item.posterUrl} nameRu={item.nameRu} puthPage={item.kinopoiskId}  countries={item.countries[0].country} year={item.year}/>)
                            }
                        </div>
                    </div>
                    <div className='search-page__result-pagination'>
                        <Pagination paginationAll={paginationAll} currentPageNumber={searchParams.pagination} changeCurrentPage={changeCurrentPage}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SearchPage;