import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const HeaderMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        document.querySelector('body').classList[openMenu ? 'add' : 'remove']('limited');
    }, [openMenu]);

    return (
        <div className='menu' onClick={() => setOpenMenu(!openMenu)}>
            <div className='menu__btn'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`menu__links ${openMenu ? 'show' : ''}`}>
                <ul>
                    <li><Link className='menu__link' to='#'>Главная</Link></li>
                    <li><Link className='menu__link' to='#'>Поиск</Link></li>
                    <li><Link className='menu__link' to='#'>Новости</Link></li>
                    <li><Link className='menu__link' to='#'>Рецензии</Link></li>
                    <li><Link className='menu__link' to='#'>Топы</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenu;