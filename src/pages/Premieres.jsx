import React, {useRef, useState} from 'react';
import '../assets/main.sass';
import '../assets/premieres.sass';
import {useEffect} from 'react';
import MovieCard from '../components/filmCards/MovieCard';
import Preloader from "../UI/Preloader";
import {getDataPremiereFilms} from "../scripts/fetchData";

const Premieres = () => {
    const dataRef = useRef('');
    const [dataFilms, setDataFilms] = useState([]);
    const [isSearch, setIsSearch] = useState(true);

    const getParams = () => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = dataRef.current.value ? new Date(dataRef.current.value) : new Date();

        return {
            month: monthNames[date.getMonth()].toUpperCase(),
            year: date.getFullYear(),
        };
    };

    const getData = async () => {
        setIsSearch(true);
        const dataParams = getParams();
        const {data} = await getDataPremiereFilms(dataParams);
        setDataFilms(data.items);
        setIsSearch(false);
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
            <div className='premieres__content'>
                {
                    isSearch
                    ? <Preloader />
                    : dataFilms.map(item => <MovieCard key={item.kinopoiskId} countries={item.countries[0].country} year={item.year} posterUrl={item.posterUrl} nameRu={item.nameRu ? item.nameRu : item.nameEn} puthPage={item.kinopoiskId}/>)
                }
            </div>
        </main>
    );

};

export default Premieres;