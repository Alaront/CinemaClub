import React from 'react';
import '../../assets/searchResultSort/searchResultSort.sass';

const SearchResultSort = (props) => {
    const {typeSort, changeTypeView = Function.prototype, changeTypeSort = Function.prototype} = props;

    return (
        <div className='search-result-sort'>
            <div className='search-result-sort__type'>
                <span>Сортировка:</span>
                <span className={typeSort === 'RATING' ? 'active' : ''} onClick={() => changeTypeSort('RATING')}>Рейтинг</span>
                <span className={typeSort === 'YEAR' ? 'active' : ''} onClick={() => changeTypeSort('YEAR')}>Год</span>
            </div>
            <div className='search-result-sort__view max-card'>
                Вид карточек:
                <span className='search-result-sort__view-max' onClick={() => changeTypeView('max')}></span>
                <span className='search-result-sort__view-min' onClick={() => changeTypeView('min')}></span>
            </div>
        </div>
    );
};

export default SearchResultSort;