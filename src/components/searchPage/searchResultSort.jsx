import React from 'react';
import '../../assets/searchResultSort/searchResultSort.sass'

const SearchResultSort = () => {
    return (
        <div className="search-result-sort">
            <div className="search-result-sort__type">
                <span>Сортировка:</span>
                <span className="active">Год</span>
                <span>Рейтинг</span>
            </div>
            <div className="search-result-sort__view max-card">
                Вид карточек:
            </div>
        </div>
    );
};

export default SearchResultSort;