import React from 'react';

const CmmentFilm = () => {
    return (
        <div className='comment-film'>
            <h4>Комментарии</h4>

            <div className='comment-film__comment-wrapper'>
                <textarea className='comment-film__info'></textarea>
            </div>

        </div>
    );
};

export default CmmentFilm;