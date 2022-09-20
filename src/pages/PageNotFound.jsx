import React from 'react';
import {useNavigate} from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();

    const goNext = () => {
        navigate(-1);
    };

    return (
        <div className='container content'>

            <h1 style={{fontSize: '35px', color: '#cc0d3e'}}>Not found</h1>

            <button className='btn waves-effect waves-light' type='submit' name='action' onClick={goNext}>Go back
                <i className='material-icons right'>arrow_back</i>
            </button>
        </div>
    );
};

export default PageNotFound;