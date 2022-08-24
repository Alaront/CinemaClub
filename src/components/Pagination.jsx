import React from "react";

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1
        }
    }

    allPages() {
        const arr = [];
        let allPagestotal = this.props.totalResults;

        while(allPagestotal > 0) {
            arr.push(allPagestotal)
            allPagestotal--;
        }

        return arr.length > 1 ? arr.reverse() : [];
    }

    changePage(index) {
        this.setState({currentPage: index})
        this.props.setNewPage(index);
    }

    render() {
        if(!this.props.totalResults) return null

        return (
            <div className="pagination">
                {
                    this.allPages().map((item) => (
                            <div onClick={() => this.changePage(item)} key={item} className={`pagination__item ${this.state.currentPage === item ? 'pagination__item--current' : ''}`} >
                                {item}
                            </div>
                        )
                    )
                }
            </div>
        )
    }

}

export default Pagination