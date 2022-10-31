import React, {useEffect, useState} from 'react';
import FormSearchMain from '../components/searchPage/FormSearchMain';
import '../assets/searchPage/searchPage.sass';
import SearchResultSort from '../components/searchPage/searchResultSort';
import FilterSelect from '../components/searchPage/FilterSelect';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {
    filterCountriesData,
    filterGenresData,
    filterRatingDataLimits,
    filterTypeData,
    filterYearDataLimits, getUrlParams,
} from '../scripts/filterData';
import FilterRange from '../components/searchPage/FilterRange';
import Pagination from '../components/searchPage/Pagination';
import MovieCard from '../components/filmCards/MovieCard';
import {getDataFilms} from '../scripts/fetchData';
import Preloader from '../UI/Preloader';
import MovieCardFull from '../components/filmCards/MovieCardFull';

const SearchPage = () => {
    const filterType = filterTypeData;
    const filterGenres = filterGenresData;
    const filterCountries = filterCountriesData;
    const yearDataLimits = filterYearDataLimits;
    const ratingDataLimits = filterRatingDataLimits;

    const [allFilms, setAllFilms] = useState([]);
    const [typeView, setTypeView] = useState('min');
    const [searchIs, setSearchIs] = useState(false);
    const [paginationAll, setPaginationAll] = useState(1);
    const [searchTitle, setSearchTitle] = useState('');
    const [menuShow, setMenuShow] = useState(false);

    const [searchParams, setSearchParams] = useState({
        keyword: '',
        type: 'ALL',
        genres: null,
        countries: null,
        yearData: [1910, 2100],
        ratingData: [0, 10],
        order: 'RATING',
        pagination: 1,
    });

    useEffect(() => {
        if(window.location.href.includes('?')) {
            searchAfterLoad();
        };
    }, []);

    const changeTypeSort = data => {
        setSearchParams({...searchParams, order: data});
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
        const cyrillicToTranslit = new CyrillicToTranslit();
        const keywordParams = objParams.keyword || '';
        const newKeyword = window.location.href.includes('&RU=change') ? cyrillicToTranslit.reverse(keywordParams.replace(/#/g, ' ')) : keywordParams.replace(/#/g, ' ');

        setSearchIs(true);

        const params = {
            order: objParams.order || 'RATING',
            type: objParams.type || 'ALL',
            ratingFrom: objParams.ratingFrom || 0,
            ratingTo: objParams.ratingTo || 10,
            yearFrom: objParams.yearFrom || 1910,
            yearTo: objParams.yearTo || 2100,
            genres: objParams.genres || null,
            countries: objParams.countries || null,
            keyword: newKeyword,
            page: objParams.page || 1,
        };

        const data = await getDataFilms(params);

        setSearchIs(false);
        changePagination(data);
        changeUrl(data, params);
        setSearchTitle(newKeyword);

        setSearchParams(prevState => ({
            ...prevState,
            keyword: newKeyword,
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
        setSearchIs(true);

        const params = {
            order: searchParams.order,
            type: searchParams.type,
            ratingFrom: searchParams.ratingData[0],
            ratingTo: searchParams.ratingData[1],
            yearFrom: searchParams.yearData[0],
            yearTo: searchParams.yearData[1],
            genres: searchParams.genres,
            countries: searchParams.countries,
            keyword: searchParams.keyword.trim().replace(/\+/g, ' '),
            page: searchParams.pagination,
        };

        const data = await getDataFilms(params);

        setSearchIs(false);
        changePagination(data);
        changeUrl(data, params);
        setSearchTitle(searchParams.keyword.trim().replace(/\+/g, ' '));
    };

    const changePagination = data => {
        setPaginationAll(data.data.totalPages);
        setAllFilms(data.data.items);
    };

    const buildRequestParams = (params) => {
        const allKeys = Object.keys(params);

        let strParams = '?';

        allKeys.forEach(item => {
            if(params[item]) {
                strParams += '&' + item + '=' + params[item];
            }
        });

        return strParams;
    };

    const changeUrl = (data, params) => {
        const cyrillicToTranslit = new CyrillicToTranslit();

        let newUrl = window.location.origin + document.location.pathname + buildRequestParams(params).replace(/ /g, '#');
        if (/[а-яА-ЯЁё]/.test(newUrl)) {
            newUrl = cyrillicToTranslit.transform(newUrl + '&RU=change', '_');
        };

        window.history.replaceState('', '', newUrl.replace(/\+/g, '#'));
    };

    return (
        <main className='container content search-page'>
            <FormSearchMain changeSearchName={changeSearchName} searchName={searchParams.keyword} startSearch={startSearch} />

            <div className={`search-page__content ${menuShow ? 'show__menu' : ''}`}>
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
                                searchIs
                                    ? <Preloader />
                                    : typeView === 'min'
                                        ? allFilms.map(item => <MovieCard key={item.kinopoiskId} posterUrl={item.posterUrl} nameRu={item.nameRu} puthPage={item.kinopoiskId} countries={item.countries[0]?.country} year={item.year}/>)
                                        : allFilms.map(item => <MovieCardFull key={item.kinopoiskId} genres={item.genres} posterUrl={item.posterUrl} puthPage={item.kinopoiskId} ratingKinopoisk={item.ratingKinopoisk} nameRu={item.nameRu} puthPage={item.kinopoiskId} countries={item.countries} year={item.year} />)
                            }
                        </div>
                    </div>
                    <div className='search-page__result-pagination'>
                        <Pagination paginationAll={paginationAll} currentPageNumber={searchParams.pagination} changeCurrentPage={changeCurrentPage}/>
                    </div>
                </div>
                <div className='search-page__show-menu-btn' onClick={() => setMenuShow(!menuShow)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </main>
    );
};

export default SearchPage;