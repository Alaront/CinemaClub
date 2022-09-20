import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './pages/Main';
import {Route, Routes} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
