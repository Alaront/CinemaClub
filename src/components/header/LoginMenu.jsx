import React from 'react';
import {Link} from "react-router-dom";

const LoginMenu = () => {
    return (
        <div className="login-menu">
            <Link to="/sign" className="login-menu-signIn"></Link>
            <Link to="/sign" className="login-menu-signUp"></Link>
        </div>
    );
};

export default LoginMenu;