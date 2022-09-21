import React from 'react';
import {Link} from "react-router-dom";
import '../assets/moviePremiereTape/moviePremiereTape.sass'
import MoviePremiereTapeCard from "./MoviePremiereTapeCard";

const MoviePremiereTape = () => {
    return (
        <div className="movie-premiere-tape">
            <div className="movie-premiere-tape__wrapper">
                <h2 className="movie-premiere-tape__title">Список кинопремьер</h2>
                <Link className="movie-premiere-tape__link" to='/'>Еще...</Link>
            </div>
            <div className="movie-premiere-tape__wrapper-card">
                <MoviePremiereTapeCard />
                <MoviePremiereTapeCard />
                <MoviePremiereTapeCard />
                <MoviePremiereTapeCard />
                <MoviePremiereTapeCard />
                <MoviePremiereTapeCard />
                <MoviePremiereTapeCard />
                <MoviePremiereTapeCard />
            </div>
        </div>
    );
};

export default MoviePremiereTape;