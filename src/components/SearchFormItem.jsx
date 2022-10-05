import React from 'react';
import {Link} from 'react-router-dom';

const SearchFormItem = ({pathPage, title, year, posterUrl}) => {
    const buildUrl = () => {
        return `/films?keyword=${title}&yearTo=${year}`.replace(/ /g, "#");
    }

    return (
        <Link to={buildUrl()} className='search-form__result-item'>
            <div className='search-form__result-item-photo'>
                <img src={posterUrl} alt={title}/>
            </div>
            <div className='search-form__result-item-text'>
                <h4>{title}</h4>
                <p>{year}</p>
            </div>
        </Link>
    );
};

export default SearchFormItem;