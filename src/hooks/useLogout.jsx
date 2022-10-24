import React from 'react';
import { signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {auth} from '../firebase';

export const useLogout = () => {
    const navigate = useNavigate();

    function logout() {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log('signOut error');
        });
    }

    return logout;
};
