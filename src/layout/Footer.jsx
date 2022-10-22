import React from 'react';
import '../assets/footer/footer.sass';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <a className='footer__link' href='https://github.com/Alaront/CinemaClub' target='_blank' rel='noreferrer'>Repo: https://github.com/Alaront/CinemaClub</a>
                <a className='footer__link' href='https://kinopoiskapiunofficial.tech/' target='_blank' rel='noreferrer'>API: https://kinopoiskapiunofficial.tech/</a>
                <span className="footer__copyright">© {new Date().getFullYear()} Copyright Text</span>
            </div>
        </footer>
    );
};

export default Footer;