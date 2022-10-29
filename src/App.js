import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './pages/Main';
import {Route, Routes} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Premieres from './pages/Premieres';
import FilmPage from './pages/FilmPage';
import SearchPage from './pages/SearchPage';
import SignPage from './pages/SignPage';
import NewsPage from './pages/NewsPage';
import UserAccount from './pages/UserAccount';
import PageNewPost from './pages/PageNewPost';
import PostPage from './pages/PostPage';
 
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/premieres' element={<Premieres />} />
                <Route path='/films' element={<SearchPage />} />
                <Route path='/account' element={<UserAccount />} />
                <Route path='/sign' element={<SignPage />} />
                <Route path='/post' element={<NewsPage />} />
                <Route path='/newPost' element={<PageNewPost />} />
                <Route path='/post/:id' element={<PostPage />} />
                <Route path='/films/:id' element={<FilmPage />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
