import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../assets/filmPage/filmPage.sass';
import image from '../assets/filmPage/image.png';
import SequelsPrequels from '../components/SequelsPrequels';
import SliderComponent from '../components/Slider/SliderComponent';

const FilmPage = () => {
    const {id} = useParams();
    const [film, setFilm] = useState();
    const [filmScreen, setFilmScreen] = useState([]);
    const [filmSimilars, setFilmSimilars] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)

        axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY_3,
                'Content-Type': 'application/json',
            },
        }).then(res => res.data)
            .then(res => setFilm(res))
            .catch(res => console.error(res));

        axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images`, {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY_3,
                'Content-Type': 'application/json',
            },
            params: {
                type: 'SCREENSHOT',
                page: 1
            }
        }).then(res => res.data)
            .then(res => setFilmScreen(res.items))
            .catch(res => console.error(res));


        axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY_3,
                'Content-Type': 'application/json',
            },
        }).then(res => res.data)
            .then(res => setFilmSimilars(res.items))
            .catch(res => console.error(res));

    }, [id]);

    const getCountry = () => {
        let country = '';

        film.countries.forEach(item => {
            country += ` ${item.country}`
        })

        return country
    }

    const getGenres = () => {
        let genres = '';

        film.genres.forEach(item => {
            genres += ` ${item.genre}`
        })

        return genres
    }

    return (
        <main className='container content film'>
            {
                film?
                    <>
                        <h1 className='film__title'>{film.nameRu}</h1>
                        <div className='film__content'>
                            <div className='film__photo'>
                                <img src={film.posterUrl || ''} alt='' />
                            </div>
                            <div className='film__info'>
                                <div className='film__info-rating'>
                                    <ul>
                                        <li>Kinopoisk {film.ratingKinopoisk}</li>
                                        <li>Imdb {film.ratingImdb}</li>
                                        <li>CC 10.7</li>
                                    </ul>
                                </div>
                                <div className='film__info-data'>
                                    <ul>
                                        <li> <span>Год</span> <span>{film.year}</span> </li>
                                        <li> <span>Страна</span> <span>{getCountry()}</span> </li>
                                        <li> <span>Жанр</span> <span>{getGenres()}</span> </li>
                                        <li> <span>Слоган</span> <span>{film.slogan}</span> </li>
                                    </ul>
                                </div>
                                <div className='film__description'>
                                    <h4>Описание</h4>
                                    <p>{film.description}</p>
                                </div>
                            </div>
                        </div>
                    </> : <></>
            }

            <div className='film__content-info'>
                <SequelsPrequels id={id}/>
            </div>

            {
                filmScreen.length ?
                    <div className='film__content-media'>
                        <h4>Галерея</h4>
                        <SliderComponent data={filmScreen} sliderType='photo' viewArray={[1, 2, 3]} spaceBetween={20}/>
                    </div> : <></>
            }

            {
                filmSimilars.length ?
                <div className='film__content-similar'>
                    <h4>Список похожих фильмов</h4>
                    <SliderComponent data={filmSimilars} sliderType='card' viewArray={[2, 5, 9]} spaceBetween={10}/>
                </div> : <></>
            }
        </main>
    );

};

export default FilmPage;