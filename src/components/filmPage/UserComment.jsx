import React from 'react';

const UserComment = () => {
    return (
        <div className='comment-film__comment-wrapper'>
            <textarea className='comment-film__info'></textarea>
            <button className='comment-film__btn'>Отправить</button>
        </div>
    );
};

export default UserComment;