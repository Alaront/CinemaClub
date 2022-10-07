import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {

    const {posterUrl = '', nameRu = '', puthPage = '', countries = '', year = ''} = props;

    return (
        <div className='movie-premiere-tape__card'>
            <div className='movie-premiere-tape__photo'>
                <img src={posterUrl} alt='fireSpot'/>
            </div>
            <Link to={`/films/${puthPage}`} className='movie-premiere-tape__card-title'>{nameRu}</Link>
            {
                countries && year
                    ? <div className='movie-premiere-tape__card-info'><span>{countries}</span> <span>{year}</span></div>
                    : <></>
            }
        </div>
    );
};

export default MovieCard;