import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import '../assets/filmPage/filmPage.sass';
import SequelsPrequels from '../components/SequelsPrequels';
import SliderComponent from '../components/Slider/SliderComponent';
import {getDataFilm} from '../scripts/fetchData';
import {markupData} from '../scripts/filterData';
import StepBackPage from '../components/StepBackPage';
import ChoiceStars from '../components/filmPage/ChoiceStars';
import CmmentFilm from '../components/filmPage/СommentFilm';

import {collection, doc, getDocs, query, setDoc, updateDoc, where} from 'firebase/firestore';
import {db} from '../firebase';

const FilmPage = () => {
    const {id} = useParams();
    const [film, setFilm] = useState();
    const [filmScreen, setFilmScreen] = useState([]);
    const [filmSimilars, setFilmSimilars] = useState([]);
    const [filmCCGrade, setFilmCCGrade] = useState();

    const getFilmData = async () => {
        const {film, screen, similars} = await getDataFilm(id);

        setFilm(film);
        setFilmScreen(screen);
        setFilmSimilars(similars);

        getFilmGrade();
    };

    const getFilmGrade = async () => {
        const q = query(collection(db, 'films'), where('id', '==', id));
        const querySnapshot = await getDocs(q);

        console.log('querySnapshot', querySnapshot);
        querySnapshot.forEach((doc) => {
            setFilmCCGrade(doc.data().grade);
        });

        if(querySnapshot.size === 0) setFilmCCGrade( ' - ');
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        getFilmData();

    }, [id]);


    return (
        <main className='container content film'>
            <StepBackPage />
            <h1 className='film__title'>{film?.nameRu}</h1>
            <div className='film__content'>
                {
                    film?
                        <>
                            <div className='film__photo'>
                                <img src={film.posterUrl || ''} alt='' />
                            </div>
                            <div className='film__info'>
                                <div className='film__info-rating'>
                                    <ul>
                                        <li className='film__info-rating--kinopoisk' >Kinopoisk {film.ratingKinopoisk}</li>
                                        <li className='film__info-rating--imdb' >Imdb {film.ratingImdb}</li>
                                        <li className='film__info-rating--cc'>CC {filmCCGrade || '-'}</li>
                                    </ul>
                                </div>
                                <div className='film__info-data'>
                                    <ul>
                                        <li> <span>Год</span> <span>{film.year}</span> </li>
                                        <li> <span>Страна</span> <span>{markupData(film.countries, 'country')}</span> </li>
                                        <li> <span>Жанр</span> <span>{markupData(film.genres, 'genre')}</span> </li>
                                        <li> <span>Слоган</span> <span>{film.slogan}</span> </li>
                                    </ul>
                                </div>
                                <div className='film__description'>
                                    <h4>Описание</h4>
                                    <p>{film.description}</p>
                                </div>
                            </div>
                        </> : <></>
                }
            </div>

            <div className='film__content-info'>
                <SequelsPrequels id={id}/>

                <ChoiceStars id={id}/>
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

            {
                <CmmentFilm />
            }
        </main>
    );

};

export default FilmPage;