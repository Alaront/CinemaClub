import React, {useEffect, useState} from 'react';
import '../assets/searchForm/searchForm.sass';
import debounce from 'lodash.debounce';
import SearchFormItem from './SearchFormItem';
import {getSearchFilmHome} from '../scripts/fetchData';

const SearchForm = () => {
    const [filmName, setFilmName] = useState('');
    const [allFilms, setAllFilms] = useState([]);

    useEffect(() => {
        searchFilm();
    }, [filmName]);

    const startSearch = async () => {
        const name = filmName.trim();
        if(!name) return;

        const {films} = await getSearchFilmHome(name);
        setAllFilms(films);
    };

    const searchFilm = debounce(startSearch, 1000);

    return (
        <div className='search-form'>
            <h1 className='search-form__title'><span>CinemaClub</span> - библиотека фильмов и сериалов на основе API <a href='#' target='_blank'>кинопоиска</a></h1>

            <div className='search-form__form-wrapper'>
                <form className='search-form__form' onSubmit={e => e.preventDefault()}>
                    <input type='text' placeholder='Название фильма' value={filmName} onChange={e => setFilmName(e.target.value)}/>
                    <button></button>
                </form>

                {
                    allFilms.length && filmName?
                        (
                            <div className='search-form__result'>
                                {allFilms.map(item => <SearchFormItem key={item.filmId} pathPage={item.filmId}
                                    title={item.nameRu ? item.nameRu : item.nameEn}
                                    year={item.year} posterUrl={item.posterUrl}/>)
                                }
                            </div>
                        ) : <></>
                }
            </div>

        </div>
    );
};

export default SearchForm;