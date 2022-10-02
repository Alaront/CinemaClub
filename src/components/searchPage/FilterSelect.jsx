import React, {useEffect, useState} from 'react';
import '../../assets/filterSelect/filterSelect.sass';

const FilterSelect = (props) => {
    const {title = '', initData = '', data = [], changeTypeFilm = Function.prototype, name = ''} = props;

    const [show, setShow] = useState(false);

    const handleChange = e => {
        changeTypeFilm(e.target.value);
    };

    return (
        <div className={`filter-select ${show ? 'filter-select-show' : ''}`}>
            <h6>{title}</h6>

            <div className='filter-select__form'>
                {
                    data.map(item => <label key={item.value} className='filter-select__label'><input onChange={handleChange} checked={item.value === initData} type='radio' name={`filter${name}`} value={item.value}/>{item.name}</label>)
                }
                {
                    data.length > 5
                        ? <span className='filter-select__btn' onClick={() => setShow(!show)}>{show ? 'Скрыть' : 'Показать'}</span> : <></>
                }
            </div>
        </div>
    );
};

export default FilterSelect;