import React from 'react';
import '../../assets/FormSearchMain/FormSearchMain.sass';

const FormSearchMain = (params) => {

    const {searchName, startSearch, changeSearchName} = params;

    return (
        <form className='form-search-main' onSubmit={e => e.preventDefault()}>
            <input className='form-search-main__input' value={searchName} type='text' placeholder={searchName} onChange={e => changeSearchName(e.target.value)}/>
            <button className='form-search-main__btn' onClick={startSearch}>ПОИСК</button>
        </form>
    );
};

export default FormSearchMain;