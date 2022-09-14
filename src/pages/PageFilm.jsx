import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Preloader from "../UI/Preloader";
import FilmPageContent from "../components/FilmPageContent";

const PageFilm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [dataFilm, setDataFilm] = useState({});
    const [isSearch, setIsSearch] = useState(true);

    useEffect(() => {
        ombdApi()
    }, [])



    const goBack = () => {
        navigate(-1)
    }

    const ombdApi = async () => {

        const {data} = await axios.get(`http://www.omdbapi.com/`, {
            params: {
                apikey: '2787517e',
                i: id,
                plot: 'full'
            }
        }).then(res => res);

        setDataFilm(data)
        setIsSearch(false)
    }

    return (
        <div className="container content">
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={goBack}>Go back
                <i className="material-icons right">arrow_back</i>
            </button>

            {
                isSearch
                ? <Preloader />
                : <FilmPageContent data={dataFilm} />
            }
        </div>
    );
};

export default PageFilm;

