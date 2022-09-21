import React from 'react';
import cardPhoto from '../assets/moviePremiereTape/cardPhoto.webp'
import {Link} from "react-router-dom";

const MoviePremiereTapeCard = () => {
    return (
        <div className="movie-premiere-tape__card">
            <img className="movie-premiere-tape__photo"  src={cardPhoto} alt="fireSpot"/>
            <Link to='/' className="movie-premiere-tape__card-title">Дитя погоды</Link>
        </div>
    );
};

export default MoviePremiereTapeCard;