import React from 'react';
import { Navigation  } from 'swiper';
import { Swiper } from 'swiper/react';
import '../../assets/slider/slider.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderComponentItem from './SliderComponentItem';

const SliderComponent = (props) => {
    const {data = ['https://www.cinelounge.org/imgfull/171702.jpg',
        'https://sun9-67.userapi.com/b1466VmnuVMZrdjn_Xw3Ij7UV0ojf6iOFNzV1g/BcTj4VfbYG8.jpg',
        'https://i.pinimg.com/originals/d1/48/1e/d1481e7713c1ed3a9a8bc9148d0aca02.png',
        'https://i.pinimg.com/originals/89/27/36/89273698415e42796c311006ea80452d.jpg',
        'https://c.wallhere.com/photos/d7/1b/hyouka_girl_brunette_ice_cream-691447.jpg!d']} = props;
    return (
        <div className='slider-component'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
            >

                <div className='swiper-wrapper'>
                    {
                        data.map(item => <SliderComponentItem dataSrc={item} key={item} />)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default SliderComponent;