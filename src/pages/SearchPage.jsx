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
    filterYearDataLimits,
} from '../scripts/filterData';
import FilterRange from '../components/searchPage/FilterRange';
import Pagination from '../components/searchPage/Pagination';
import axios from "axios";
import MoviePremiereTapeCard from "../components/MoviePremiereTapeCard";

const SearchPage = () => {
    const [allFilms, setAllFilms] = useState([]);
    const [searchName, setSearchName] = useState('Matrix');
    const [typeFilm, setTypeFilm] = useState('ALL');
    const [genresFilm, setGenresFilm] = useState(null);
    const [countriesFilm, setCountriesFilm] = useState(null);
    const [yearData, setYearData] = useState([1910, 2100]);
    const [ratingData, setRatingData] = useState([0, 10]);
    const [typeSort, setTypeSort] = useState('RATING');
    const [typeView, setTypeView] = useState('min');
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [paginationAll, setPaginationAll] = useState(1);

    const filterType = filterTypeData;
    const filterGenres = filterGenresData;
    const filterCountries = filterCountriesData;
    const yearDataLimits = filterYearDataLimits;
    const ratingDataLimits = filterRatingDataLimits;

    useEffect(() => {
        startSearch();
    }, [currentPageNumber])

    const changeTypeSort = data => {
        setTypeSort(data);
    };

    const changeTypeView = data => {
        setTypeView(data);
    };

    const changeTypeFilm = data => {
        setTypeFilm(data);
    };

    const changeGenresFilm = data => {
        setGenresFilm(Number(data));
    };

    const changeCountriesFilm = data => {
        setCountriesFilm(Number(data));
    };

    const changeYearData = data => {
        setYearData(data);
    };

    const changeRatingDataData = data => {
        setRatingData(data);
    };

    const changeCurrentPage = data => {
        setCurrentPageNumber(data);
    };

    const changeSearchName = data => {
        setSearchName(data)
    }

    const startSearch = async () => {
        console.log('startSearch');

        const data = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
                        headers: {
                            'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY_2,
                            'Content-Type': 'application/json',
                        },
                        params: {
                            order: typeSort,
                            type: typeFilm,
                            ratingFrom: ratingData[0],
                            ratingTo: ratingData[1],
                            yearFrom: yearData[0],
                            yearTo: yearData[1],
                            genres: genresFilm,
                            countries: countriesFilm,
                            page: currentPageNumber,
                            keyword: searchName.trim()
                        }
                    }).then(res => res.data)
                        .then(res => res)
                        .catch(err => console.log(err))

        console.log('data res', data)

        setPaginationAll(data.totalPages)
        setAllFilms(data.items)
    }

    return (
        <main className='container content search-page'>
            <FormSearchMain changeSearchName={changeSearchName} searchName={searchName} startSearch={startSearch} />

            <div className='search-page__content'>
                <div className='search-page__filter'>
                    <FilterSelect title={'Тип'} data={filterType} initData={typeFilm} name={'_type'} changeTypeFilm={changeTypeFilm}/>
                    <FilterSelect title={'Жанр'} data={filterGenres} initData={genresFilm} name={'_genres'} changeTypeFilm={changeGenresFilm}/>
                    <FilterSelect title={'Страна'} data={filterCountries} initData={countriesFilm} name={'_countries'} changeTypeFilm={changeCountriesFilm}/>
                    <FilterRange title={'Год'} data={yearData} dataLimits={yearDataLimits} changeYearData={changeYearData}/>
                    <FilterRange title={'Рейтинг'} data={ratingData} dataLimits={ratingDataLimits} changeYearData={changeRatingDataData}/>
                </div>
                <div className='search-page__result'>
                    <div className='search-page__result-wrapper'>
                        <h2 className='search-page__title'>Поиск по:  {searchName}</h2>
                        <SearchResultSort typeSort={typeSort} changeTypeSort={changeTypeSort} changeTypeView={changeTypeView}/>
                        <div className='search-page__result-carts'>
                            {
                                allFilms.map(item => <MoviePremiereTapeCard key={item.kinopoiskId} posterUrl={item.posterUrl} nameRu={item.nameRu} puthPage={item.kinopoiskId}  countries={item.countries[0].country} year={item.year}/>)
                            }
                        </div>
                    </div>
                    <div className='search-page__result-pagination'>
                        <Pagination paginationAll={paginationAll} currentPageNumber={currentPageNumber} changeCurrentPage={changeCurrentPage}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SearchPage;