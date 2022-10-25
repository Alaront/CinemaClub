import React, {useEffect, useState} from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {collection, query, where, getDocs, setDoc, doc} from 'firebase/firestore';
import '../assets/Sign/sign.sass';
import {auth, db} from '../firebase';
import {useNavigate} from 'react-router-dom';
import {validateEmail} from '../scripts/helpers';

const SignPage = () => {
    const [errorUp, setErrorUp] = useState(false);
    const [errorIn, setErrorIn] = useState(false);
    const navigate = useNavigate();

    const sendDataUp = async (e) => {
        e.preventDefault();
        setErrorUp(false);

        if(!validateEmail(e.target[1].value)) {
            setErrorUp(true);
            return;
        }

        if(!e.target[0].value.trim().length) {
            setErrorUp(true);
            return;
        }

        const q = query(collection(db, 'users'), where('loginName', '==', `@${e.target[0].value}`));
        const querySnapshot = await getDocs(q);
        if(querySnapshot.size === 0) {
            const res = await createUserWithEmailAndPassword(auth, e.target[1].value, e.target[2].value)
                .then((userCredential) => userCredential)
                .catch(() => {
                    setErrorUp(true);
                    return;
                });

            await setDoc(doc(db, 'users', res.user.uid), {
                uid: res.user.uid,
                loginName: `@${e.target[0].value}`,
                email: e.target[1].value,
            });
            navigate('/');

        } else {
            setErrorUp(true);
        }

    };

    const sendDataIn = (e) => {
        e.preventDefault();
        setErrorIn(false);

        signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value)
            .then((userCredential) => {
                setErrorIn(false);
                navigate('/');
            })
            .catch(() => {
                setErrorIn(true);
            });
    };

    return (
        <div className='container content signWrapper'>
            <div className='sign'>
                <h3 className='sign__title'>Вход</h3>
                <form className='sign__form' onSubmit={sendDataIn}>
                    <label>
                        Email <input type='email' />
                    </label>
                    <label>
                        Пароль <input type='password' />
                    </label>

                    <button>OK</button>
                </form>

                {
                    errorIn && (<span className='error-info'>Неверный пароль или почта</span>)
                }
            </div>

            <div className='sign'>
                <h3 className='sign__title'>Регистрация</h3>
                <form className='sign__form' onSubmit={sendDataUp}>
                    <label>
                        Логин @<input type='text' />
                    </label>
                    <label>
                        Email <input type='email' />
                    </label>
                    <label>
                        Пароль <input type='password' />
                    </label>

                    <button>OK</button>
                </form>
                {
                    errorUp && (<span className='error-info'>Что-то не так с введёнными данными. Возможно какие-то данны были указаны ранее</span>)
                }
            </div>
        </div>
    );
};

export default SignPage;