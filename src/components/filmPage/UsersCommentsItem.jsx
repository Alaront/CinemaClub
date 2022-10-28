import React, {useEffect, useState} from 'react';
import userPhoto from '../../assets/account/user-photo.png';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../firebase';

const UsersCommentsItem = (props) => {
    const { userUid = '0', text = ''} = props;

    const [userData, setUserData] = useState({
        userPhoto,
        login: '-',
    });

    useEffect(() => {
        getUserData();


        console.log('props effect', props);
        console.log('userUid effect', userUid);
    }, [userUid]);

    const getUserData = async () => {
        console.log('getUserData start');
        const q = query(collection(db, 'users'), where('uid', '==', userUid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log('doc.data().photoURL, ',  doc.data().photoURL);
            setUserData({
                userPhoto: doc.data().photoURL ? doc.data().photoURL : userPhoto,
                login:  doc.data().loginName,
            });
        });
    };

    return (
        <div className='comment-film__users-comments-item'>
            <div className='comment-film__users-comments-info'>
                <div className='comment-film__users-comments-img'>
                    <img src={userData.userPhoto} alt='photo'/>
                </div>
                <span>{userData.login}</span>
            </div>
            <p className='comment-film__users-comments-text'>{text}</p>
        </div>
    );
};

export default UsersCommentsItem;