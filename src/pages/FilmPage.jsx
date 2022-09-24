import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import '../assets/filmPage/filmPage.sass'
import image from '../assets/filmPage/image.png'
import SequelsPrequels from "../components/SequelsPrequels";
import SliderComponent from "../components/Slider/SliderComponent";

const FilmPage = () => {
    const {id} = useParams()
    const [film, setFilm] = useState();

    useEffect(() => {
        console.log(id)
    //     axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    //         headers: {
    //             'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY,
    //             'Content-Type': 'application/json',
    //         },
    //     }).then(res => res.data)
    //         .then(res => console.log(res))
    //         .catch(res => console.error(res));
    }, [])

    return (
        <main className='container content film'>
            <h1 className="film__title">Инициал Ди: Стадия первая (сериал 1998)</h1>
            <div className="film__content">
                <div className="film__photo">
                    <img src={image} alt="" />
                </div>
                <div className="film__info">
                    <div className="film__info-rating">
                        <ul>
                            <li>kinoPoisk 1.7</li>
                            <li>iMDB 1.7</li>
                            <li>CC 10.7</li>
                        </ul>
                    </div>
                    <div className="film__info-data">
                        <ul>
                            <li> <span>Год</span> <span>1998</span> </li>
                            <li> <span>Страна</span> <span>Япония</span> </li>
                            <li> <span>Жанр</span> <span>аниме, мультфильм, боевик, комедия, спорт</span> </li>
                            <li> <span>Слоган</span> <span>«Drift across Second Stage's finish line!»</span> </li>
                            <li> <span>Режиссер</span> <span>Син Мисава, Масами Хата</span> </li>
                        </ul>
                    </div>
                    <div className="film__description">
                        <h4>Описание</h4>
                        <p>Такуми Фудзивара, сын владельца магазина тофу. По ночам он садится в свою Toyota Sprinter Trueno AE86 и гоняет по горным дорогам. Однажды гоночный клуб Акаги Ред Санз бросил вызов Акина Спид Старз, а соревноваться решили они в тех самых горах, где живет Такуми. Так и сошлись - легендарный гонщик Кейске на своей Mazda RX-7 и Такуми.</p>
                    </div>
                </div>
            </div>
            <div className="film__content-info">
                <SequelsPrequels />
                <div className="film__awards">
                    <h4>Награды и сборы</h4>
                </div>
            </div>
            <div className="film__content-media">
                <h4>Галерея</h4>
                <SliderComponent />
            </div>
        </main>
    );

};

export default FilmPage;