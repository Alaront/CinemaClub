import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../assets/moviePremiereTape/moviePremiereTape.sass';
import MoviePremiereTapeCard from './MoviePremiereTapeCard';
import Preloader from "../UI/Preloader";
import {getDataPremiereFilms} from "../scripts/fetchData";

const MoviePremiereTape = () => {
    const [tapeData, setTapeData] = useState([]);
    const [isSearch, setIsSearch] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getParams = () => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date();

        return {
            month: monthNames[date.getMonth()].toUpperCase(),
            year: date.getFullYear(),
        };
    };

    const getData = async () => {
        const dataParams = getParams();
        const {data} = await getDataPremiereFilms(dataParams);
        setTapeData(data.items.slice(0, 8));
        setIsSearch(false);
    }

    return (
        <div className='movie-premiere-tape'>
            <div className='movie-premiere-tape__wrapper'>
                <h2 className='movie-premiere-tape__title'>Список кинопремьер</h2>
                <Link className='movie-premiere-tape__link' to='/premieres'>Еще...</Link>
            </div>
            <div className='movie-premiere-tape__wrapper-card'>
                {
                    isSearch
                    ? <Preloader />
                    : tapeData.map(item => <MoviePremiereTapeCard posterUrl={item.posterUrl} puthPage={item.kinopoiskId} nameRu={item.nameRu} key={item.kinopoiskId} />)
                }
            </div>
        </div>
    );
};

export default MoviePremiereTape;