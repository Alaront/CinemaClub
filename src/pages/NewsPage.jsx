import React from 'react';
import '../assets/newsAbout/newsAbout.sass';
import PostItem from '../components/PostItem';

const NewsPage = () => {
    return (
        <div className='container content news'>
            <h2 className='post__title'>Статьи</h2>

            <div className='post__content'>
                <PostItem title='Title 1' idPuth='id_post' />
                <PostItem title='Title 2' idPuth='id_post' />
                <PostItem title='Title 3' idPuth='id_post' />
                <PostItem title='Title 4' idPuth='id_post' />
                <PostItem title='Title 5' idPuth='id_post' />
                <PostItem title='Title 6' idPuth='id_post' />
            </div>
        </div>
    );
};

export default NewsPage;