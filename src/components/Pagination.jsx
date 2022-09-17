import React, {useContext, useEffect, useState} from "react";
import {CustomFilmContext} from "../Context/Context";

const Pagination = () => {

    const {totalResults, setPage, page} = useContext(CustomFilmContext);

    const [currentPage, setCurrentPage] = useState(page)

    const allPages = () => {
        const arr = [];
        let allPagestotal = totalResults;

        while(allPagestotal > 0) {
            arr.push(allPagestotal)
            allPagestotal--;
        }

        return arr.length > 1 ? arr.reverse() : [];
    }


    useEffect(() => {
        setCurrentPage(page);
    }, [page])

    const changePage = index => {
        setCurrentPage(index)
        setPage(index);
    }


    if(!totalResults) return null
    return (
        <div className="pagination">
            {
                allPages().map((item) => (
                        <div onClick={() => changePage(item)} key={item} className={`pagination__item ${currentPage === item ? 'pagination__item--current' : ''}`} >
                            {item}
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Pagination