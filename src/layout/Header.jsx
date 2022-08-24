import React from 'react';

const Header = () => {
    return (
        <nav className="green lighten-2">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React films</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;