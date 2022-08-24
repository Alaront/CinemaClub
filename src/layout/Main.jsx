import React from 'react';
import axios from "axios";
import FilmCard from "../components/FilmCard";
import Preloader from "../UI/Preloader";
import Search from "../components/Search";
import FilmsCards from "../components/FilmsCards";
import Pagination from "../components/Pagination";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allFilms: [],
            nameSearch: 'Matrix',
            isSearch: false,
            type: '',
            totalResults: 0,
            page: 1
        }

        this.newSearch = this.newSearch.bind(this)
        this.newPage = this.newPage.bind(this)
    }

    componentDidMount() {
        this.ombdApi();
    }


    async ombdApi() {
        this.setState({isSearch: true})

        const {data} = await axios.get(`http://www.omdbapi.com/`, {
            params: {
                apikey: '2787517e',
                s: this.state.nameSearch,
                type: this.state.type,
                page: this.state.page
            }
        }).then(res => res);

        this.setState({allFilms: data.Search ? data.Search : [], totalResults: data.totalResults, isSearch: false})
    }

    async newSearch(data) {
        await this.setState({nameSearch: data.name, type: data.type})
        this.ombdApi();
    }

    async newPage(index) {
        await this.setState({page: index})
        this.ombdApi()
    }

    render() {
        return (
            <main className="container content">
                <Search newSearch={this.newSearch}/>
                <div className="content__films">
                    {
                        !this.state.isSearch
                            ?
                            <FilmsCards allFilms={this.state.allFilms}/>
                            :
                            <Preloader />
                    }
                </div>

                <Pagination setNewPage={this.newPage} totalResults={Math.ceil(Number(this.state.totalResults) / 10)}/>


            </main>
        );
    }
}

export default Main;