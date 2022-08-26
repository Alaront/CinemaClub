import React, {useEffect, useState} from "react";

const Pagination = props => {

    const [currentPage, setCurrentPage] = useState(props.pageNumber)

    const allPages = () => {
        const arr = [];
        let allPagestotal = props.totalResults;

        while(allPagestotal > 0) {
            arr.push(allPagestotal)
            allPagestotal--;
        }

        return arr.length > 1 ? arr.reverse() : [];
    }

    useEffect(() => {
        setCurrentPage(props.pageNumber);
    }, [props.pageNumber])

    const changePage = index => {
        setCurrentPage(index)
        props.setNewPage(index);
    }


    if(!props.totalResults) return null
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