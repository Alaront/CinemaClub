import React, {useContext, useEffect} from 'react';
import {useState} from 'react';
import userPhoto from '../../assets/account/user-photo.png';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {db, storage} from '../../firebase';
import {ContextAuth} from '../../context/contextAuth';
import {collection, doc, getDocs, query, updateDoc, where} from 'firebase/firestore';

const UserAccountPhoto = () => {
    const [loadingPercentage, setLoadingPercentage] = useState(0);
    const [loadPhoto, setLoadPhoto] = useState(true);
    const [urlPhoto, setUrlPhoto] = useState('');

    const {user} = useContext(ContextAuth);

    useEffect(() => {
        if(Object.keys(user).length) getPhotoUrl();
    }, [user]);

    const getPhotoUrl = async () => {
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setUrlPhoto(doc.data().photoURL);

            setTimeout(() => {
                setLoadPhoto(false);
            }, 1000);
        });
    };

    const changePhoto = (e) => {
        setTimeout(() => {
            setLoadPhoto(true);
        }, 1000);

        const storageRef = ref(storage, user.uid);
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setLoadingPercentage(Number(progress));
            },
            (error) => {
                // eslint-disable-next-line no-console
                console.error(error);
                setTimeout(() => {
                    setLoadPhoto(false);
                }, 1000);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => downloadURL)
                    .then((downloadURL) => {
                        updateDoc(doc(db, 'users', user.uid), {
                            photoURL: downloadURL,
                        }).then(() => {
                            setUrlPhoto(downloadURL);
                            setLoadingPercentage(0);
                            setTimeout(() => {
                                setLoadPhoto(false);
                            }, 1000);
                        });
                    }).catch(error => {
                    // eslint-disable-next-line no-console
                        console.error(error);
                        setTimeout(() => {
                            setLoadPhoto(false);
                        }, 1000);
                    });
            }
        );
    };

    return (
        <div className='account__photo-wrapper'>
            <div className={`account__photo ${loadPhoto ? 'load-photo' : ''}`}>
                <img src={urlPhoto ? urlPhoto : userPhoto} alt='user photo'/>
            </div>
            <div className='account__photo-info'>
                <label htmlFor={'photoMain'}>СМЕНИТЬ ФОТО ПРОФИЛЯ</label>
                <input type='file' accept='image/png, image/gif, image/jpeg' id='photoMain' onChange={changePhoto}/>
                {
                    loadingPercentage > 0 && <span className='account__photo-progress' data-progress={`${loadingPercentage}%`}><span style={{width: `${loadingPercentage}%`}}></span></span>
                }
            </div>
        </div>
    );
};

export default UserAccountPhoto;