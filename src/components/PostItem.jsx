import React from 'react';
import {Link} from 'react-router-dom';

const PostItem = (props) => {
    const {
        title = '',
        idPuth = 0,
        cover = '',
        text = '',
    } = props;

    return (
        <Link to={`/post/${idPuth}`} className='post-item'>
            <img src={cover} alt='photo post' />
            <h3>{title}</h3>
            <p>{text}...</p>
        </Link>
    );
};

export default PostItem;