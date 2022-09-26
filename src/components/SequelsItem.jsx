import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const SequelsItem = ({urlPhoto = '', name = '', sequelsUrl = ''}) => {
    useEffect(() => {
        console.log('sequelsUrl', sequelsUrl)
    })

    return (
        <div className="film__sequels-item">
            <div className="film__sequels-photo">
                <img src={urlPhoto} alt='photo' />
            </div>
            <Link to={`/films/${sequelsUrl}`} className="film__sequels-text">
                <h6>{name}</h6>
            </Link>
        </div>
    );
};

export default SequelsItem;