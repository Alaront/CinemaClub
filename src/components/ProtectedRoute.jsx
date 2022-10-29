import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import {ContextAuth} from '../context/contextAuth';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(ContextAuth);
    if (!user) {
        return <Navigate to='/sign' />;
    }
    return children;
};

export default ProtectedRoute;