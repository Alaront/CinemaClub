import React from 'react';
import '../../assets/FormSearchMain/FormSearchMain.sass';

const FormSearchMain = (params) => {

    const {searchName} = params;

    return (
        <form className='form-search-main' onSubmit={e => e.preventDefault()}>
            <input className='form-search-main__input' type='text' placeholder={searchName}/>
            <button className='form-search-main__btn'>ПОИСК</button>
        </form>
    );
};

export default FormSearchMain;