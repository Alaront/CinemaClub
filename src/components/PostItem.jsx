import React from 'react';
import {Link} from "react-router-dom";

const PostItem = (props) => {
    const {
        title = '',
        idPuth = 0
    } = props;

    return (
        <Link to={`/new/${idPuth}`} className="post-item">
            <img src="https://www.zastavki.com/pictures/originals/2015/Anime_The_black-haired_girl_from_the_author_Coffee-Kizoku_111291_.jpg" alt="photo new" />
            <h3>{title}</h3>
            <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lor...</p>
        </Link>
    );
};

export default PostItem;