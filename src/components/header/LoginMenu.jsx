import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ContextAuth} from '../../context/contextAuth';
import {useLogout} from '../../hooks/useLogout';

const LoginMenu = () => {
    const {user} = useContext(ContextAuth);
    const logout = useLogout();

    const logoutEvent = () => {
        logout();
    };

    return (
        <div className='login-menu'>
            {
                user && (
                    <>
                        <Link to='/account' className='login-menu-user'></Link>
                        <div className='login-menu-logout' onClick={logoutEvent}></div>
                    </>
                )
            }
            {
                !user && (
                    <>
                        <Link to='/sign' className='login-menu-signIn'></Link>
                        <Link to='/sign' className='login-menu-signUp'></Link>
                    </>
                )
            }
        </div>
    );
};

export default LoginMenu;