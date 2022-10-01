import React, {useState} from 'react';
import FormSearchMain from "../components/searchPage/FormSearchMain";
import '../assets/searchPage/searchPage.sass'
import SearchResultSort from "../components/searchPage/searchResultSort";
import FilterSelect from "../components/searchPage/FilterSelect";
import {
    filterCountriesData,
    filterGenresData,
    filterRatingDataLimits,
    filterTypeData,
    filterYearDataLimits
} from "../scripts/filterData";
import FilterRange from "../components/searchPage/FilterRange";

const SearchPage = () => {
    const [searchName, setSearchName] = useState('Matrix');
    const [typeFilm, setTypeFilm] = useState('ALL');
    const [genresFilm, setGenresFilm] = useState(null);
    const [countriesFilm, setCountriesFilm] = useState(null);
    const [yearData, setYearData] = useState([1910, 2100]);
    const [ratingData, setRatingData] = useState([0, 10]);
    const [typeSort, setTypeSort] = useState('RATING');
    const [typeView, setTypeView] = useState('min');

    const filterType = filterTypeData;
    const filterGenres = filterGenresData;
    const filterCountries = filterCountriesData;
    const yearDataLimits = filterYearDataLimits;
    const ratingDataLimits = filterRatingDataLimits;

    const changeTypeSort = data => {
        setTypeSort(data)
    }
    const changeTypeView = data => {
        setTypeView(data)
    }

    const changeTypeFilm = data => {
        setTypeFilm(data);
    }

    const changeGenresFilm = data => {
        setGenresFilm(data);
    }

    const changeCountriesFilm = data => {
        setCountriesFilm(data);
    }

    const changeYearData = data => {
        setYearData(data)
    }

    const changeRatingDataData = data => {
        setRatingData(data)
    }

    return (
        <main className='container content search-page'>
            <FormSearchMain searchName={searchName}/>

            <div className="search-page__content">
                <div className="search-page__filter">
                    <FilterSelect title={'Тип'} data={filterType} initData={typeFilm} name={'_type'} changeTypeFilm={changeTypeFilm}/>
                    <FilterSelect title={'Жанр'} data={filterGenres} initData={genresFilm} name={'_genres'} changeTypeFilm={changeGenresFilm}/>
                    <FilterSelect title={'Страна'} data={filterCountries} initData={countriesFilm} name={'_countries'} changeTypeFilm={changeCountriesFilm}/>
                    <FilterRange title={'Год'} data={yearData} dataLimits={yearDataLimits} changeYearData={changeYearData}/>
                    <FilterRange title={'Рейтинг'} data={ratingData} dataLimits={ratingDataLimits} changeYearData={changeRatingDataData}/>
                </div>
                <div className="search-page__result">
                    <h2 className="search-page__title">Поиск по:  {searchName}</h2>
                    <SearchResultSort typeSort={typeSort} changeTypeSort={changeTypeSort} changeTypeView={changeTypeView}/>
                    <div className="search-page__result-carts">

                    </div>
                </div>
            </div>
        </main>
    );
};

export default SearchPage;