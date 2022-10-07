import React from 'react';
import {Link} from 'react-router-dom';
import {markupData} from '../../scripts/filterData';

const MovieCardFull = (props) => {
    const {
        countries = [],
        genres = [],
        nameRu = '',
        posterUrl = '',
        year = '',
        ratingKinopoisk = '',
        puthPage = '#',
    } = props;

    return (
        <div className='movie-card-full'>
            <div className='movie-card-full__img'>
                <img src={posterUrl} alt='photo'/>
                <span className='movie-card-full__rating'>{ratingKinopoisk}</span>
            </div>
            <div className='movie-card-full__info'>
                <div className='movie-card-full__title'>
                    <Link to={`/films/${puthPage}`}>{nameRu}</Link>
                    <span>{year} г.</span>
                </div>
                <div className='movie-card-full__countries'>
                    {markupData(countries, 'country')}
                </div>
                <div className='movie-card-full__genres'>
                    {markupData(genres, 'genre')}
                </div>
            </div>
        </div>
    );
};

export default MovieCardFull;