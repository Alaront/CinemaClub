import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../assets/moviePremiereTape/moviePremiereTape.sass';
import MoviePremiereTapeCard from './MoviePremiereTapeCard';
import axios from 'axios';

const MoviePremiereTape = () => {
    const [tapeData, setTapeData] = useState([]);

    useEffect(() => {
        axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=JANUARY', {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY_3,
                'Content-Type': 'application/json',
            },
        }).then(res => res.data)
            .then(res => setTapeData(res.items.slice(0, 8)))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='movie-premiere-tape'>
            <div className='movie-premiere-tape__wrapper'>
                <h2 className='movie-premiere-tape__title'>Список кинопремьер</h2>
                <Link className='movie-premiere-tape__link' to='/premieres'>Еще...</Link>
            </div>
            <div className='movie-premiere-tape__wrapper-card'>
                {
                    tapeData
                        ? tapeData.map(item => <MoviePremiereTapeCard posterUrl={item.posterUrl} puthPage={item.kinopoiskId} nameRu={item.nameRu} key={item.kinopoiskId} />) : <></>
                }
            </div>
        </div>
    );
};

export default MoviePremiereTape;