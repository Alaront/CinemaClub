import React, {useEffect, useState} from 'react';
import '../assets/newsAbout/newsAbout.sass';
import PostItem from '../components/PostItem';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../firebase';
import StepBackPage from '../components/StepBackPage';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {ContextAuth} from '../context/contextAuth';

const NewsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const navigate = useNavigate();

    const {user} = useContext(ContextAuth);

    const getPosts = async () => {
        const q = query(collection(db, 'postPreview'),  where('moder', '==', true));
        const querySnapshot = await getDocs(q);

        const newPosts = [];
        querySnapshot.forEach((doc) => {
            newPosts.push(doc.data());
        });
        setPosts(newPosts);
    };

    const writePost = () => {
        if(user){
            navigate('/newPost');
        } else {
            navigate('/sign');
        }
    };

    return (
        <div className='container content news'>
            <StepBackPage />
            <h2 className='post__title'>Статьи</h2>
            <span className='post__write' onClick={writePost}>Написать статью</span>
            <div className='post__content'>
                {
                    posts.length > 0 && posts.map(item => <PostItem key={item.id} title={item.title} idPuth={item.id} cover={item.cover} text={item.text}/>)
                }
            </div>
        </div>
    );
};

export default NewsPage;