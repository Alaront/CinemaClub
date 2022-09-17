import React, {useContext, useState} from 'react';
import {CustomFilmContext} from "../Context/Context";

const Search = () => {

    const {setType, setPage, changeName, name, type} =  useContext(CustomFilmContext);

    const [typeMovie, setTypeMovie] = useState(type ? type : '')
    const [nameMovie, setNameMovie] = useState(name ? name : '')
    const [nameIsNotCorrect, setNameIsNotCorrect] = useState(false);

    const typeChange = e => {
        setTypeMovie(e.target.value)
    }

    const nameChange = e => {
        setNameMovie(e.target.value)
    }

    const newSearch = e => {
        e.preventDefault();
        if(setClassErrorName()) return

        setType(typeMovie);
        setPage(1);
        changeName(nameMovie.trim());
    }

    const setClassErrorName = () => {
        if(!nameMovie.trim().length) {
            setNameIsNotCorrect( true)
            return true
        } else {
            setNameIsNotCorrect(false)
        }
    }

    return (
        <div className="search">
            <form className="search-form" onSubmit={newSearch}>
                <div className={`search-form__name ${nameIsNotCorrect ? 'search-name-error' : ''}`}>
                    <input type="text" placeholder='Matrix' value={nameMovie} onChange={nameChange}/>
                    <a className="search-form__btn waves-effect waves-light btn" onClick={newSearch}>Search</a>
                </div>
                <div className="search-form__radio">
                    <p><label><input type="radio" value="" name="typefilm" checked={typeMovie === ''} onChange={typeChange}/> <span>ALL</span></label></p>
                    <p><label><input type="radio" value="movie" name="typefilm" checked={typeMovie === 'movie'} onChange={typeChange}/> <span>Movies</span></label></p>
                    <p><label><input type="radio" value="series"  name="typefilm" checked={typeMovie === 'series'} onChange={typeChange}/> <span>Series</span></label></p>
                    <p><label><input type="radio" value="episode"  name="typefilm" checked={typeMovie === 'episode'} onChange={typeChange}/> <span>Episode</span></label></p>
                </div>
            </form>

        </div>
    );

}

export default Search;