import React, { Component } from 'react'
import axios from 'axios';

import SearchBar from './SearchBar';
import ResultList from './ResultList';

export class SearchComp extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        searchResults: []
    }
    onSearchSubmit = async(term) => {
        const response = await axios.get('https://api.discogs.com/database/search?key=SlPZROroaiWawaERraWk&secret=VjPlMAsMMgDaIxKsbpjAHecERQvQUBNQ', {
            params: { q: term },
        });


        console.log(response);
        this.setState({ searchResults: response.data.results });
    }

    render() {
        return ( <
            div className = "container"
            style = {
                { marginTop: '10px' }
            } >
            <
            SearchBar onSubmit = { this.onSearchSubmit }
            /> <
            ResultList results = { this.state.searchResults }
            /> < /
            div > );
    }
}


export default SearchComp