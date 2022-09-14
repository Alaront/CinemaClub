import React from 'react';

const FilmPageContent = ({data}) => {

    return (
        <div className="content__film">
        {
            Object.keys(data).length === 2
            ?  <h1 style={{fontSize: '35px', color: '#cc0d3e'}}>Not found</h1>
            : (
                <>
                    <div className="content__photo">
                        <img src={data.Poster}/>
                    </div>
                    <div className="content__text">
                        <h1>{data.Title}</h1>
                        <p>Year: {data.Year}</p>
                        <p>Runtime: {data.Runtime}</p>
                        <p>Director: {data.Director}</p>
                        <p>Actors: {data.Actors}</p>
                        <p>Country: {data.Country}</p>
                        <p>Awards: {data.Awards}</p>
                        <p>Description: {data.Plot}</p>
                    </div>
                </>
                )
        }
        </div>
    );
};

export default FilmPageContent;