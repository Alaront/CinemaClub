import React, {useContext, useEffect} from 'react';
import axios from "axios";
import Preloader from "../UI/Preloader";
import Search from "../components/Search";
import FilmsCards from "../components/FilmsCards";
import Pagination from "../components/Pagination";
import {CustomFilmContext} from "../Context/Context";

const Main = () => {

    const {name, changeName, allFilms, setAllFilms, type, setType, page, setPage, isSearch, setIsSearch, totalResults, setTotalResults} = useContext(CustomFilmContext)



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
        await setTotalResults(data.totalResults);
        await setIsSearch(false)
    }


    const newSearch = (data) => {
        setType(data.type);
        setPage(1);
        changeName(data.name);
    }

    const newPage = (index) => {
         setPage(index)
    }

    return (
        <main className="container content">
            <Search newSearch={newSearch}/>

            <div className="content__films">
                {
                    !isSearch
                        ?
                        <FilmsCards allFilms={allFilms}/>
                        :
                        <Preloader />
                }
            </div>

            <Pagination setNewPage={newPage} totalResults={Math.ceil(Number(totalResults) / 10)} pageNumber={page}/>
        </main>
    );

}

export default Main;