import React from 'react';
import {Link} from 'react-router-dom';

const MoviePremiereTapeCard = ({posterUrl, nameRu, puthPage}) => {
    return (
        <div className='movie-premiere-tape__card'>
            <div className='movie-premiere-tape__photo'>
                <img src={posterUrl} alt='fireSpot'/>
            </div>
            <Link to={`/${puthPage}`} className='movie-premiere-tape__card-title'>{nameRu}</Link>
        </div>
    );
};

export default MoviePremiereTapeCard;