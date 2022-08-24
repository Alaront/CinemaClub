import React from 'react';
import axios from "axios";
import FilmCard from "../components/FilmCard";
import Preloader from "../UI/Preloader";
import Search from "../components/Search";
import FilmsCards from "../components/FilmsCards";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allFilms: [],
            nameSearch: 'Matrix',
            isSearch: false,
            type: ''
        }

        this.newSearch = this.newSearch.bind(this)
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
                type: this.state.type
            }
        }).then(res => res);


        console.log('data', data)
        this.setState({allFilms: data.Search ? data.Search : [], isSearch: false})
    }

    async newSearch(data) {
        console.log('newSearch')
        await this.setState({nameSearch: data.name, type: data.type})
        this.ombdApi();
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
            </main>
        );
    }
}

export default Main;