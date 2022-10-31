import React, {useState} from 'react';
import '../assets/errorPopup/errorPopup.sass';

const ErrorPopup = () => {
    const [show, setShow] = useState(true);

    const closePopup = () => {
        setShow(false);
    };

    return (
        <div className={`error-popup ${show ? 'popup-show' : ''}`}>
            <span className='error-popup-close' onClick={closePopup}></span>
            <p>Возможно, в вашем регионе firebase недоступен, поэтому могут не работать комментарии и личный кабинет</p>
        </div>
    );
};

export default ErrorPopup;