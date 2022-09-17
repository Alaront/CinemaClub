import React, {useContext, useEffect} from 'react';
import axios from "axios";
import Preloader from "../UI/Preloader";
import Search from "../components/Search";
import FilmsCards from "../components/FilmsCards";
import Pagination from "../components/Pagination";
import {CustomFilmContext} from "../Context/Context";

const Main = () => {

    const {name, setAllFilms, type, page, isSearch, setIsSearch, setTotalResults} = useContext(CustomFilmContext)


    useEffect(() => {
        ombdApi();
    }, [])

    useEffect(() => {
        ombdApi();
    }, [name, type, page])

    const ombdApi = async () => {
        setIsSearch( true)

        const {data} = await axios.get(`http://www.omdbapi.com/`, {
            params: {
                apikey: '2787517e',
                s: name,
                type: type,
                page: page
            }
        }).then(res => res);

        await setAllFilms(data.Search ? data.Search : []);
        await setTotalResults(Math.ceil(Number(data.totalResults) / 10));
        await setIsSearch(false)
    }


    return (
        <main className="container content">
            <Search />

            <div className="content__films">
                {
                    !isSearch
                        ?
                        <FilmsCards />
                        :
                        <Preloader />
                }
            </div>

            <Pagination />
        </main>
    );

}

export default Main;