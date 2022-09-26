import React, {useEffect, useState} from 'react';
import SequelsItem from "./SequelsItem";
import axios from "axios";

const SequelsPrequels = ({id}) => {
    const [showSequels, setShowSequels] = useState(false);
    const [film, setFilm] = useState([]);

   useEffect(() => {
       axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/sequels_and_prequels`, {
           headers: {
               'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY_3,
               'Content-Type': 'application/json',
           },
       }).then(res => res.data)
           .then(res => setFilm(res))
           .catch(res => console.error(res));

       setShowSequels(false)
   }, [id])

    return (
        <>
            {
                film.length  ?
                    <div className={`film__sequels-prequels ${showSequels ? 'sequels-show' : ''}`} >
                        <h4>Сиквелы и приквелы</h4>
                        <div className="film__sequels-prequels-w    rappers">
                            {
                                film.map(item => <SequelsItem key={item.filmId} sequelsUrl={item.filmId} urlPhoto={item.posterUrlPreview} name={item.nameRu}/>)
                            }
                        </div>
                        {
                            film.length > 1 ?
                                <div className="film__sequels-prequels-btn" onClick={() => setShowSequels(!showSequels)}>{showSequels ? 'Скрыть' : 'Открыть'}</div> : <></>
                        }

                    </div>
                    : <></>
            }
        </>
    );
};

export default SequelsPrequels;