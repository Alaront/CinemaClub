import React, {useEffect, useState} from 'react';
import '../assets/searchForm/searchForm.sass';

const SearchForm = () => {
    const [filmName, setFilmName] = useState('');

    useEffect(() => {
        startSearch(filmName.trim());
    }, [filmName]);

    const startSearch = name => {
        //console.log(name)

    };

    return (
        <div className='search-form'>
            <h1 className='search-form__title'><span>CinemaClub</span> - библиотека фильмов и сериалов на основе API <a href='#' target='_blank'>кинопоиска</a></h1>

            <form className='search-form__form' onSubmit={e => e.preventDefault()}>
                <input type='text' placeholder='Название фильма' value={filmName} onChange={e => setFilmName(e.target.value)}/>
                <button></button>
            </form>

        </div>
    );
};

export default SearchForm;