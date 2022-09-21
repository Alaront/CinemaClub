import React, {useEffect, useState} from 'react';
import '../assets/searchForm/searchForm.sass';
import debounce from 'lodash.debounce'
import axios from "axios";
import SearchFormItem from "./SearchFormItem";

const SearchForm = () => {
    const [filmName, setFilmName] = useState('');
    const [allFilms, setAllFilms] = useState([])

    useEffect(() => {
        searchFilm();
    }, [filmName]);

    const startSearch = () => {
        const name = filmName.trim();
        console.log('startSearch')
        if(!name) return

        console.log('name', name)

        axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword`, {
            params: {
                keyword: name,
                page: 1,
            },
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY,
                'Content-Type': 'application/json',
            }
        }).then(res => res.data)
            .then(res => setAllFilms(res.films))
            .catch(res => console.error(res));
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
                    allFilms.length > 0 ?
                        (
                            <div className="search-form__result">
                                {allFilms.map(item => <SearchFormItem key={item.filmId} pathPage={item.filmId}
                                    title={item.nameRu ? item.nameRu : item.nameEn}
                                    year={item.year} posterUrl={item.posterUrl}/>)
                                }                            </div>
                        ) : <></>
                }
            </div>

        </div>
    );
};

export default SearchForm;