import React, {useEffect, useState} from 'react';
import axios from "axios";
import Preloader from "../UI/Preloader";
import Search from "../components/Search";
import FilmsCards from "../components/FilmsCards";
import Pagination from "../components/Pagination";

const Main = () => {

    const [allFilms, setAllFilms] = useState([]);
    const [nameSearch, setNameSearch] = useState('Matrix');
    const [type, setType] = useState('');
    const [page, setPage] = useState(1);

    const [isSearch, setIsSearch] = useState(false);
    const [totalResults, setTotalResults] = useState(0);


    useEffect(() => {
        ombdApi();
    }, [])

    useEffect(() => {
        ombdApi();
    }, [nameSearch, type, page])

    const ombdApi = async () => {
        setIsSearch( true)

        console.log('searchName omdbi', nameSearch)

        const {data} = await axios.get(`http://www.omdbapi.com/`, {
            params: {
                apikey: '2787517e',
                s: nameSearch,
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
        setNameSearch(data.name);
    }

    const newPage = (index) => {
         setPage(index)
    }

    return (
        <main className="container content">
            <h1>Search: {nameSearch}</h1>
            <h1>totalResults: {totalResults}</h1>
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