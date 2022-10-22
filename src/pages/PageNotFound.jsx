import React from 'react';
import StepBackPage from "../components/StepBackPage";

const PageNotFound = () => {


    return (
        <div className='container content'>
            <StepBackPage />

            <h1 style={{fontSize: '35px', color: '#cc0d3e'}}><span style={{display: "block", 'fontSize': '200px'}}>404</span>Not found</h1>

        </div>
    );
};

export default PageNotFound;