import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import axios from 'axios';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import SearchComp from './SearchComp';
import Playlist from './Playlist';



class App extends React.Component {

    state = {
        search: false,
        playlist: false,

    };

    render() {
        return ( <
            div className = "container mt-5" >
            <
            div >
            <
            button className = "btn btn-success btn-circle btn-xl"
            onClick = {
                () => {
                    { this.state.search ? this.setState({ search: false }) : this.setState({ search: true }) }
                    this.setState({ playlist: false });
                }
            } > Search Music < /button> <
            button className = "btn btn-success btn-circle btn-xl"
            onClick = {
                () => {
                    this.setState({ search: false }); { this.state.playlist ? this.setState({ playlist: false }) : this.setState({ playlist: true }) }
                }
            } > View Playlist < /button> < /
            div > <
            div > { this.state.search ? < SearchComp / > : null } { this.state.playlist ? < Playlist / > : null } <
            /div> < /
            div >
        );
    }
}

export default App;