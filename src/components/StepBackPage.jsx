import React from 'react';
import {useNavigate} from "react-router-dom";

const StepBackPage = () => {
    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1);
    };

    return (
        <div className="back-page" onClick={backPage}>
            Предыдущая страница
        </div>
    );
};

export default StepBackPage;