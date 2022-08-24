import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            name: '',
            nameIsNotCorrect: false
        }
    }

    typeChange = e => {
        this.setState({type: e.target.value})
    }

    nameChange = e => {
        this.setState({name: e.target.value})
    }

    newSearch = e => {
        e.preventDefault();
        if(this.setClassErrorName()) return

        this.props.newSearch({name: this.state.name.trim(), type: this.state.type})
    }

    setClassErrorName() {
        if(!this.state.name.length) {
            this.setState({nameIsNotCorrect: true})
            return true
        } else {
            this.setState({nameIsNotCorrect: false})
        }
    }

    render() {
        return (
            <div className="search">
                <form className="search-form" onSubmit={this.newSearch}>
                    <div className={`search-form__name ${this.state.nameIsNotCorrect ? 'search-name-error' : ''}`}>
                        <input type="text" placeholder='Matrix' value={this.state.name} onChange={this.nameChange}/>
                        <a className="search-form__btn waves-effect waves-light btn" onClick={this.newSearch}>Search</a>
                    </div>
                    <div className="search-form__radio">
                        <p><label><input type="radio" value="" name="typefilm" checked={this.state.type === ''} onChange={this.typeChange}/> <span>ALL</span></label></p>
                        <p><label><input type="radio" value="movie" name="typefilm" checked={this.state.type === 'movie'} onChange={this.typeChange}/> <span>Movies</span></label></p>
                        <p><label><input type="radio" value="series"  name="typefilm" checked={this.state.type === 'series'} onChange={this.typeChange}/> <span>Series</span></label></p>
                        <p><label><input type="radio" value="episode"  name="typefilm" checked={this.state.type === 'episode'} onChange={this.typeChange}/> <span>Episode</span></label></p>
                    </div>
                </form>

            </div>
        );
    }

}

export default Search;