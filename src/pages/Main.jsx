import React from 'react';

import '../assets/main.sass';
import SearchForm from '../components/SearchForm';
import MoviePremiereTape from '../components/MoviePremiereTape';

const Main = () => {

    return (
        <main className='container content'>
            <MoviePremiereTape />

            <SearchForm />
        </main>
    );

};

export default Main;