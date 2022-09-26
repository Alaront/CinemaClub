import React, {useEffect, useState} from 'react';
import { Navigation  } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import '../../assets/slider/slider.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderComponentItemPhoto from './SliderComponentItemPhoto';
import MoviePremiereTapeCard from "../MoviePremiereTapeCard";

const SliderComponent = (props) => {
    const {data = [], sliderType, viewArray, spaceBetween} = props;

    const startView = () => {
        if(width < 720) return viewArray[0];
        if(width < 1200) return viewArray[1];

        return viewArray[2];
    };

    const [width, setWidth] = useState(window.innerWidth);
    const [slideView, setSlideView] = useState(() => startView());

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setSlideView(() => startView())
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });


    return (
        <div className='slider-component'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={spaceBetween}
                slidesPerView={slideView}
                navigation
            >

                <div className='swiper-wrapper'>
                    {
                        sliderType === 'photo' ? data.map(item => <SwiperSlide key={item.imageUrl}> <SliderComponentItemPhoto dataSrc={item.imageUrl} /> </SwiperSlide>): <></>
                    }
                    {
                        sliderType === 'card' ? data.map(item =><SwiperSlide key={item.filmId}> <MoviePremiereTapeCard puthPage={item.filmId} posterUrl={item.posterUrlPreview} nameRu={item.nameRu} /></SwiperSlide>): <></>
                    }

                </div>
            </Swiper>
        </div>
    );
};

export default SliderComponent;