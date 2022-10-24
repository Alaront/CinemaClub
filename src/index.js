import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './assets/index.sass';
import {ContextAuthProvider} from "./context/contextAuth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextAuthProvider>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </ContextAuthProvider>
);

