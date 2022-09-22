import React, {useRef, useState} from 'react';
import '../assets/main.sass';
import '../assets/premieres.sass';
import {useEffect} from 'react';
import axios from 'axios';
import MoviePremiereTapeCard from "../components/MoviePremiereTapeCard";

const Premieres = () => {
    const dataRef = useRef('');
    const [dataFilms, setDataFilms] = useState([]);

    const getParams = () => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = dataRef.current.value ? new Date(dataRef.current.value) : new Date();

        console.log(date);

        return {
            month: monthNames[date.getMonth()].toUpperCase(),
            year: date.getFullYear(),
        };
    };

    const getData = () => {

        axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres', {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY,
                'Content-Type': 'application/json',
            },
            params: {
                ...getParams(),
            },
        }).then(res => res.data)
            .then(res => setDataFilms(res.items))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <main className='container content premieres'>
            <h1 className='premieres__title'>Кинопремьеры</h1>
            <form className='premieres__filter' onSubmit={e => e.preventDefault()}>
                <label>
                    Укажите месяц и год для поиска
                    <input ref={dataRef} type='date' min='1045-01-01' max='2040-12-31'/>
                </label>
                <button className='premieres__filter-btn' onClick={getData}>Поиск</button>
            </form>
            <div className="premieres__content">
                {
                    dataFilms.length  ?
                        dataFilms.map(item => <MoviePremiereTapeCard key={item.kinopoiskId} countries={item.countries[0].country} year={item.year} posterUrl={item.posterUrl} nameRu={item.nameRu ? item.nameRu : item.nameEn} puthPage={item.kinopoiskId}/>) : <></>
                }
            </div>
        </main>
    );

};

export default Premieres;