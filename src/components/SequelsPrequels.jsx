import React, {useEffect, useState} from 'react';
import SequelsItem from './SequelsItem';
import {getDataSequels} from "../scripts/fetchData";

const SequelsPrequels = ({id}) => {
    const [showSequels, setShowSequels] = useState(false);
    const [film, setFilm] = useState([]);

    const filmData = async () => {
        const data = await getDataSequels(id);
        setFilm(data || [])
    }

    useEffect(() => {
        filmData();

        setShowSequels(false);
    }, [id]);

    return (
        <>
            {
                film.length  ?
                    <div className={`film__sequels-prequels ${showSequels ? 'sequels-show' : ''}`} >
                        <h4>Сиквелы и приквелы</h4>
                        <div className='film__sequels-prequels-w    rappers'>
                            {
                                film.map(item => <SequelsItem key={item.filmId} sequelsUrl={item.filmId} urlPhoto={item.posterUrlPreview} name={item.nameRu}/>)
                            }
                        </div>
                        {
                            film.length > 2 ?
                                <div className='film__sequels-prequels-btn' onClick={() => setShowSequels(!showSequels)}>{showSequels ? 'Скрыть' : 'Открыть'}</div> : <></>
                        }

                    </div>
                    : <></>
            }
        </>
    );
};

export default SequelsPrequels;