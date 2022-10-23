import React from 'react';
import '../assets/header/header.sass';
import HeaderMenu from '../components/header/HeaderMenu';
import LoginMenu from "../components/header/LoginMenu";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <HeaderMenu />
                <Link to="/" className='header__title'>CinemaClub</Link>
                <LoginMenu />
            </div>
        </header>
    );
};

export default Header;