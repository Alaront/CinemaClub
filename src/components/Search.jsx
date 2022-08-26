import React, {useState} from 'react';

const Search = props => {

    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [nameIsNotCorrect, setNameIsNotCorrect] = useState(false);

    const typeChange = e => {
        setType(e.target.value)
    }

    const nameChange = e => {
        setName(e.target.value)
    }

    const newSearch = e => {
        e.preventDefault();
        if(setClassErrorName()) return

        props.newSearch({name: name.trim(), type: type, page: 1})
    }

    const setClassErrorName = () => {
        if(!name.trim().length) {
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
                    <input type="text" placeholder='Matrix' value={name} onChange={nameChange}/>
                    <a className="search-form__btn waves-effect waves-light btn" onClick={newSearch}>Search</a>
                </div>
                <div className="search-form__radio">
                    <p><label><input type="radio" value="" name="typefilm" checked={type === ''} onChange={typeChange}/> <span>ALL</span></label></p>
                    <p><label><input type="radio" value="movie" name="typefilm" checked={type === 'movie'} onChange={typeChange}/> <span>Movies</span></label></p>
                    <p><label><input type="radio" value="series"  name="typefilm" checked={type === 'series'} onChange={typeChange}/> <span>Series</span></label></p>
                    <p><label><input type="radio" value="episode"  name="typefilm" checked={type === 'episode'} onChange={typeChange}/> <span>Episode</span></label></p>
                </div>
            </form>

        </div>
    );

}

export default Search;