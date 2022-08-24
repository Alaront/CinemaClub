import React, {Component} from "react";
import FilmCard from "./FilmCard";

class FilmsCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {
                    this.props.allFilms.length
                        ?
                        this.props.allFilms.map(item => (
                            <FilmCard key={item.imdbID} photoSrc={item.Poster} title={item.Title} yaer={item.Year} type={item.Type}/>
                        ))
                        :
                        <h1>Films is not found</h1>
                }
            </>
        )
    }
}

export default FilmsCards