import React, {useState} from 'react';
import FormSearchMain from "../components/searchPage/FormSearchMain";
import '../assets/searchPage/searchPage.sass'
import SearchResultSort from "../components/searchPage/searchResultSort";
import FilterSelect from "../components/searchPage/FilterSelect";
import {filterCountriesData, filterGenresData, filterTypeData} from "../scripts/filterData";

const SearchPage = () => {
    const [searchName, setSearchName] = useState('Matrix');
    const [typeFilm, setTypeFilm] = useState('ALL');

    const filterType = filterTypeData;
    const filterGenres = filterGenresData;
    const filterCountries = filterCountriesData;

    const changeTypeFilm = data => {
        setTypeFilm(data);
    }

    return (
        <main className='container content search-page'>
            <FormSearchMain searchName={searchName}/>

            <div className="search-page__content">
                <div className="search-page__filter">
                    <FilterSelect title={'Тип'} data={filterType} name={'_type'} changeTypeFilm={changeTypeFilm}/>
                    <FilterSelect title={'Жанр'} data={filterGenres} name={'_genres'} changeTypeFilm={changeTypeFilm}/>
                    <FilterSelect title={'Страна'} data={filterCountries} name={'_countries'} changeTypeFilm={changeTypeFilm}/>
                </div>
                <div className="search-page__result">
                    <h2 className="search-page__title">Поиск по:  {searchName}</h2>
                    <SearchResultSort />
                    <div className="search-page__result-carts">

                    </div>
                </div>
            </div>
        </main>
    );
};

export default SearchPage;