import React from 'react';
import {useState} from 'react';
import userPhoto from '../../assets/account/user-photo.png';

const UserAccountPhoto = () => {
    const [loadingPercentage, setLoadingPercentage] = useState(30);

    return (
        <div className='account__photo-wrapper'>
            <div className='account__photo'>
                <img src={userPhoto} alt='user photo'/>
            </div>
            <div className='account__photo-info'>
                <label htmlFor={'photoMain'}>СМЕНИТЬ ФОТО ПРОФИЛЯ</label>
                <input type='file' accept='image/png, image/gif, image/jpeg' id='photoMain'/>
                <span className='account__photo-progress' data-progress={`${loadingPercentage}%`}><span style={{width: `${loadingPercentage}%`}}></span></span>
            </div>
        </div>
    );
};

export default UserAccountPhoto;