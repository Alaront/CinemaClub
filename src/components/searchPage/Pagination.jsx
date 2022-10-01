import React, {useEffect, useState} from 'react';

const Pagination = (props) => {
    const {paginationAll = 1, currentPageNumber = 1, changeCurrentPage = Function.prototype} = props;


    const getPageBtn = () => {
        let i = 1;

        const allBtn = [];

        while (i <= paginationAll){
            allBtn.push({
                id: Date.now() + Math.random() + i,
                value: i,
            });

            i++;
        }

        return allBtn;
    };

    return (
        <ul>
            {
                getPageBtn().map(item => <li key={item.id} className={`${item.value === currentPageNumber ? 'current' : ''}`} onClick={() => changeCurrentPage(item.value)}>{item.value}</li>)
            }
        </ul>
    );
};

export default Pagination;