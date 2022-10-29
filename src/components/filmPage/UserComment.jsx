import React, {useRef} from 'react';
import {updateDoc, arrayUnion, doc, query, collection, where, getDocs, setDoc} from 'firebase/firestore';
import {db} from '../../firebase';
import {v4 as uuid} from 'uuid';
import {useContext} from 'react';
import {ContextAuth} from '../../context/contextAuth';
import {useNavigate} from 'react-router-dom';

const UserComment = ({id}) => {

    const infoRef = useRef();

    const navigate = useNavigate();

    const {user} = useContext(ContextAuth);

    const handleSend = async (e) => {
        e.preventDefault();

        if(!user)  {
            navigate('/sign');
            return;
        }

        const textData = infoRef.current.value.trim();

        if(textData.length === 0) return;

        const q = query(collection(db, 'films'), where('id', '==', id));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.size === 0) {
            await setDoc(doc(db, 'films', id), {
                id: uuid(),
                text: textData,
                userUid: user.uid,
            });
        } else {
            await updateDoc(doc(db, 'films', id), {
                comments: arrayUnion({
                    id: uuid(),
                    text: textData,
                    userUid: user.uid,
                }
                ),
            });
        }

        infoRef.current.value = '';
    };


    return (
        <div className='comment-film__comment-wrapper'>
            <textarea ref={infoRef} className='comment-film__info'></textarea>
            <button className='comment-film__btn' onClick={handleSend}>Отправить</button>
        </div>
    );
};

export default UserComment;