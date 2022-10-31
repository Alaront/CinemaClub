import React, {useEffect, useState} from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import {db} from '../../firebase';
import UsersCommentsItem from './UsersCommentsItem';

const UsersComments = ({id}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'films', id), (doc) => {
            doc.exists() && setComments(doc.data().comments ? doc.data().comments : []);
        });

        return () => {
            unSub();
        };
    }, [id]);
    //
    // console.log('message id', id);
    // console.log('message', comments);

    return (
        <div className='comment-film__users-comments'>
            {
                comments.length > 0 && comments.map(item => <UsersCommentsItem userUid={item.userUid} moder={item.moder ? item.moder : false} text={item.text} key={item.id}/>)
            }
        </div>
    );
};

export default UsersComments;