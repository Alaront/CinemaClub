import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './pages/Main';
import {Route, Routes} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Premieres from './pages/Premieres';
import FilmPage from './pages/FilmPage';
import SearchPage from './pages/SearchPage';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/premieres' element={<Premieres />} />
                <Route path='/films' element={<SearchPage />} />
                <Route path='/films/:id' element={<FilmPage />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
