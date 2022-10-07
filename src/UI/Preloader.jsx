import React from 'react';
import Loader from 'react-js-loader';
import '../assets/loader/loader.sass';

const Preloader = () => {
    return (
        <div className='loader'>
            <Loader type='bubble-spin' bgColor={'#bb0a0a'} color={'#17b691'} size={100} />
        </div>
    );
};

export default Preloader;