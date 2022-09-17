import React from 'react';
import {Link} from "react-router-dom";

const FilmCard = (props) => {

    return (
        <Link className="card" to={`film/${props.link}`}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.photoSrc} />
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">{props.title}</span>
                <div className="card-content__desc">
                    <p>{props.type}</p>
                    <span>{props.yaer}</span>
                </div>
            </div>
        </Link>
    );
};

export default FilmCard;