import React, {useEffect, useState} from 'react';
import { Navigation  } from 'swiper';
import { Swiper } from 'swiper/react';
import '../../assets/slider/slider.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderComponentItem from './SliderComponentItem';
import MoviePremiereTapeCard from "../MoviePremiereTapeCard";

const SliderComponent = (props) => {
    const {data = ['https://www.cinelounge.org/imgfull/171702.jpg',
        'https://sun9-67.userapi.com/b1466VmnuVMZrdjn_Xw3Ij7UV0ojf6iOFNzV1g/BcTj4VfbYG8.jpg',
        'https://i.pinimg.com/originals/d1/48/1e/d1481e7713c1ed3a9a8bc9148d0aca02.png',
        'https://i.pinimg.com/originals/89/27/36/89273698415e42796c311006ea80452d.jpg',
        'https://c.wallhere.com/photos/d7/1b/hyouka_girl_brunette_ice_cream-691447.jpg!d'], sliderType, viewArray} = props;

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
                spaceBetween={20}
                slidesPerView={slideView}
                navigation
            >

                <div className='swiper-wrapper'>
                    {
                        sliderType === 'photo' ? data.map(item => <SliderComponentItem dataSrc={item} key={item} />): <></>
                    }
                    {
                        sliderType === 'card' ? data.map(item => <MoviePremiereTapeCard key={item} />): <></>
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default SliderComponent;