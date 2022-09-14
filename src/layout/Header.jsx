import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="green lighten-2">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">HOME</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;