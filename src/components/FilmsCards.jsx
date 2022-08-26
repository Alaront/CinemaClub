import React, {Component} from "react";
import FilmCard from "./FilmCard";

const FilmsCards = (props) => {

    return (
        <>
            {
                props.allFilms.length
                    ?
                    props.allFilms.map(item => (
                        <FilmCard key={item.imdbID} link={item.imdbID} photoSrc={item.Poster} title={item.Title} yaer={item.Year} type={item.Type}/>
                    ))
                    :
                    <h1>Films is not found</h1>
            }
        </>
    )
}

export default FilmsCards