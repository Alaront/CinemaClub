import React, {createContext, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "../firebase";

export const ContextAuth = createContext();

export const ContextAuthProvider = ({children}) => {
    const [user, setUser] = useState({});

    useState(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setUser(user)
            console.log('user context', user)
        })

        return () => {
            unsub();
        }

    }, []);

    return (
        <ContextAuth.Provider value={{user}}>
            {children}
        </ContextAuth.Provider>
    );
};