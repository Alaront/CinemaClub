import React, {useEffect, useRef, useState} from 'react';
import { updateEmail } from 'firebase/auth';
import {auth, db} from '../../firebase';
import {collection, getDocs, query, where, updateDoc, doc} from 'firebase/firestore';
import {useContext} from 'react';
import {ContextAuth} from '../../context/contextAuth';
import {validateEmail} from '../../scripts/helpers';

const UserAccountText = () => {
    const {user} = useContext(ContextAuth);
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [inputBlock, setInputBlock] = useState(true);
    const [updateInfo, setUpdateInfo] = useState('');

    useEffect(() => {
        if(Object.keys(user).length) getUserData();

    }, [user]);

    const getUserData = async () => {
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setEmail(doc.data().email);
            setLogin(doc.data().loginName);
            setInputBlock(false);
        });
    };

    const changeEmail = (e) => {
        e.preventDefault();
        setUpdateInfo('');

        if(!validateEmail(email)) {
            setUpdateInfo('email not valid');
            return;
        }

        updateEmail(auth.currentUser, email)
            .then(() => {
                updateDoc(doc(db, 'users', user.uid), {
                    email: email,
                });
            }).then(() => {
                setUpdateInfo('Данные обновлены');
            }).catch((error) => {
                console.error(error);
                setUpdateInfo('Ошибка, попробуйте перезайти в систему');
            });
    };

    const changeLogin = (e) => {
        e.preventDefault();
        setUpdateInfo('');

        let emailTemp = login;

        if(emailTemp[0] !== '@') {
            emailTemp = `@${emailTemp}`;
            setLogin(emailTemp);
        };

        updateDoc(doc(db, 'users', user.uid), {
            loginName: emailTemp,
        }).then(() => {
            setUpdateInfo('Данные обновлены');
        }).catch((error) => {
            console.error(error);
            setUpdateInfo('Ошибка, попробуйте перезайти в систему');
        });
    };

    return (
        <div className='account__text-wrapper'>
            <div className='account__text account__text-login'>
                <label>
                    Login: <input type='text' value={login} readOnly={inputBlock} onChange={e => setLogin(e.target.value)}/>
                </label>
                <button onClick={changeLogin}>Сменить login</button>
            </div>
            <div className='account__text account__text-email'>
                <label>
                    Еmail: <input type='email' value={email} readOnly={inputBlock} onChange={e => setEmail(e.target.value)}/>
                </label>
                <button onClick={changeEmail}>Сменить email</button>
            </div>

            {
                updateInfo && <p className='account__info-update'>{updateInfo}</p>
            }
        </div>
    );
};

export default UserAccountText;