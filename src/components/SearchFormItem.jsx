import React from 'react';
import {Link} from 'react-router-dom';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

const SearchFormItem = ({pathPage, title, year, posterUrl}) => {
    const buildUrl = () => {
        const cyrillicToTranslit = new CyrillicToTranslit();
        let newPath = `/films?keyword=${title}&yearTo=${year}`.replace(/ /g, "#");

        if (/[а-яА-ЯЁё]/.test(newPath)) {
            newPath = cyrillicToTranslit.transform(newPath + '&RU=change', '_');
        };

        return newPath;
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