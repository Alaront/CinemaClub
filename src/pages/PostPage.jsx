import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../firebase';
import '../assets/postPage/post-page.sass';
import userPhoto from '../assets/account/user-photo.png';
import StepBackPage from '../components/StepBackPage';
import {ContextAuth} from '../context/contextAuth';

const PostPage = () => {
    const [data, setData] = useState({});
    const [author, setAuthor] = useState();
    const [authorData, setAuthorData] = useState({
        img: userPhoto,
        login: '-',
    });

    const {id} = useParams();

    useEffect(() => {
        getData();
    }, [id]);

    useEffect(() => {
        if(author) {
            getAuthorData();
        }
    }, [author]);

    const getData = async () => {
        const q = query(collection(db, 'posts'), where('id', '==', id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setData({
                cover: doc.data().cover,
                text:  doc.data().text,
                title:  doc.data().title,
            });

            setAuthor(doc.data().userId);
        }); 
    };

    const getAuthorData = async () => {
        const q = query(collection(db, 'users'), where('uid', '==', author));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setAuthorData({
                img: doc.data().photoURL ? doc.data().photoURL : userPhoto,
                login: doc.data().loginName,
            });
        });
    };

    return (
        <div className='container content post-page'>
            <StepBackPage />
            <h2>{data.title}</h2>
            <div className='post__author'>
                <img src={authorData.img} alt='author-photo'/>
                <span>{authorData.login}</span>
            </div>
            {
                data.cover && <img className='post-page__cover' src={data.cover} alt='cover'/>
            }
            <p>{data.text}</p>
        </div>
    );
};

export default PostPage;