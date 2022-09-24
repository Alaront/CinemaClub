import React from 'react';
import {SwiperSlide} from "swiper/react";


const SliderComponentItem = ({dataSrc}) => {
    return (
        <SwiperSlide><img className="swiper-slider-img" src={dataSrc}/> </SwiperSlide>
    );
};

export default SliderComponentItem;