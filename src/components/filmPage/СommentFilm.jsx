import React from 'react';
import UserComment from './UserComment';
import UsersComments from './UsersComments';

const CommentFilm = () => {
    return (
        <div className='comment-film'>
            <h4>Комментарии</h4>

            <UsersComments />

            <UserComment />

        </div>
    );
};

export default CommentFilm;