import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const HeaderMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        document.querySelector('body').classList[openMenu ? 'add' : 'remove']('limited');
    }, [openMenu]);

    return (
        <div className='menu'>
            <div className='menu__btn' onClick={() => setOpenMenu(!openMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`menu__links ${openMenu ? 'show' : ''}`}>
                <ul>
                    <li><Link className='menu__link' onClick={() => setOpenMenu(!openMenu)} to='/'>Главная</Link></li>
                    <li><Link className='menu__link' onClick={() => setOpenMenu(!openMenu)} to='/films'>Поиск</Link></li>
                    <li><Link className='menu__link' onClick={() => setOpenMenu(!openMenu)} to='/news'>Новости</Link></li>
                    <li><Link className='menu__link' onClick={() => setOpenMenu(!openMenu)} to='#'>Рецензии</Link></li>
                    <li><Link className='menu__link' onClick={() => setOpenMenu(!openMenu)} to='#'>Топы</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenu;