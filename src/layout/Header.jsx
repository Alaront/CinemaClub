import React from 'react';
import '../assets/header/header.sass';
import HeaderMenu from '../components/HeaderMenu';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <HeaderMenu />
                <h1 className='header__title'>CinemaClub</h1>
            </div>
        </header>
    );
};

export default Header;