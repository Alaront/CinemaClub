import React, {useContext} from "react";
import FilmCard from "./FilmCard";
import {CustomFilmContext} from "../Context/Context";

const FilmsCards = () => {
    const {allFilms} = useContext(CustomFilmContext)

    return (
        <>
            {
                allFilms.length
                    ?
                    allFilms.map(item => (
                        <FilmCard key={item.imdbID} link={item.imdbID} photoSrc={item.Poster} title={item.Title} yaer={item.Year} type={item.Type}/>
                    ))
                    :
                    <h1>Films is not found</h1>
            }
        </>
    )
}

export default FilmsCards