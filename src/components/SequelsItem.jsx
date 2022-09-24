import React from 'react';
import image from '../assets/filmPage/image.png'

const SequelsItem = () => {
    return (
        <div className="film__sequels-item">
            <div className="film__sequels-photo">
                <img src={image} alt='photo' />
            </div>
            <div className="film__sequels-text">
                <h6>Initial D 2</h6>
                <p>Year 2019</p>
            </div>
        </div>
    );
};

export default SequelsItem;