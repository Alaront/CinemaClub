import React from 'react';
import UserComment from './UserComment';
import UsersComments from './UsersComments';

const CommentFilm = ({id}) => {
    return (
        <div className='comment-film'>
            <h4>Комментарии</h4>

            <UsersComments id={id}/>

            <UserComment id={id}/>

        </div>
    );
};

export default CommentFilm;