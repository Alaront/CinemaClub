import React, {useContext, useRef, useState} from 'react';
import '../assets/newPost/newPost.sass';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import {db, storage} from '../firebase';
import {collection, doc, getDocs, query, setDoc, updateDoc, where} from 'firebase/firestore';
import {v4 as uuid} from 'uuid';
import {ContextAuth} from '../context/contextAuth';
import {useNavigate} from 'react-router-dom';


const PageNewPost = () => {
    const [imgError, setImgError] = useState(false);
    const [postLink, setPostLink] = useState(uuid());
    const [cover, setCover] = useState();

    const {user} = useContext(ContextAuth);

    const titleRef = useRef();
    const textRef = useRef();

    const navigate = useNavigate();

    const pushNewPost = async (e) => {
        e.preventDefault();
        if(!cover) setImgError(true);

        const title = titleRef.current.value.trim();
        const text = textRef.current.value.trim();

        if(title.length && text.length) {
            console.log('start push post');

            await setDoc(doc(db, 'posts', postLink), {
                id: postLink,
                title,
                text,
                cover,
                userId: user.uid,
            });

            await setDoc(doc(db, 'postPreview', postLink), {
                id: postLink,
                title,
                text: text.substr(0, 90),
                cover,
                moder: false,
            });

            titleRef.current.value = '';
            textRef.current.value = '';
            setCover(null);
            navigate('/post');

        }
    };

    const setPhoto = async (e) => {
        setImgError(false);

        const storageRef = ref(storage, postLink);
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

        uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
                // eslint-disable-next-line no-console
                console.error(error);
                setImgError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => setCover(downloadURL))
                    .catch(error => {
                        console.error(error);
                        setImgError(true);
                    });
            }
        );
    };

    return (
        <div className='container content news'>
            <h4>Написать статью</h4>

            <form action='' className='news__form' onSubmit={pushNewPost}>
                <label className='news__title'>
                    Заголовок
                    <input ref={titleRef} type='text'/>
                </label>
                <label className='news__cover'>
                    Обложка
                    <input type='file' accept='image/png, image/gif, image/jpeg' id='photoCover' onChange={setPhoto}/>
                    <label className='news__cover-wrapper'>
                        <label htmlFor='photoCover' className='news__cover-img'></label>
                        {
                            cover && <img src={cover} alt='cover'/>
                        }
                        {
                            imgError && <p>Выберите изображение для обложки</p>
                        }
                    </label>
                </label>
                <label className='news__text'>
                    Текст
                    <textarea ref={textRef}></textarea>
                </label>

                <button>Опубликовать</button>
            </form>
            
        </div>
    );
};

export default PageNewPost;