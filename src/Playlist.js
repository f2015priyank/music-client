import React from 'react'
import axios from 'axios';

export class Playlist extends React.Component {
        constructor(props) {
            super(props)

        }
        onRemoveClick = async(e, id) => {
            e.target.disabled = true;
            // const response = await
            axios.delete('http://localhost:8080/tracks/' + id, {});
            document.getElementById(id).style.display = "none";

        }
        state = { value: "", mytable: "" };


        handleChange = async(event) => {


                var evnt = event.target.value;
                if (evnt !== '') {
                    const response = await axios.get('http://localhost:8080/playlists/' + evnt, {});

                    console.log(response.data.data)
                    if (response.data.res === "OK") {
                        this.setState({
                                mytable: ( < div className = "table-responsive mt-4" > < table id = "example"
                                    className = "table table-hover table-borderless display" >
                                    <
                                    thead className = "thead-dark" >
                                    <
                                    tr >
                                    <
                                    th scope = "col" > Track ID < /th> <
                                    th scope = "col" > Title < /th> <
                                    th scope = "col" > Playlist ID < /th> <
                                    th scope = "col" > Master ID < /th> <
                                    th scope = "col" > URI < /th> <
                                    th scope = "col" > < /th>

                                    <
                                    /tr> < /
                                    thead > <
                                    tbody > {
                                        response.data.data.map(result => ( <
                                            tr key = { result.id }
                                            id = { result.id } >
                                            <
                                            td > { result.id } < /td > <
                                            td > { result.title } < /td > <
                                            td > { result.playlist_id } < /td > <
                                            td > { result.master_id } < /td > <
                                            td > { result.uri } < /td > <
                                            td > < button className = "btn btn-danger"

                                            onClick = {
                                                (e) => { this.onRemoveClick(e, result.id) }
                                            } > < i className = "fa fa-times" > < /i> &nbsp;Delete from Playlist</button > < /td> < /
                                            tr >
                                        ))
                                    } <
                                    /tbody> < /
                                    table > < /div>)
                                });
                        }
                        else if (response.data.res === "NOTOK") {
                            this.setState({
                                    mytable: ( < div className = "table-responsive mt-4" > < table id = "example"
                                        className = "table table-hover table-borderless display" >
                                        <
                                        thead className = "thead-dark" >
                                        <
                                        tr >
                                        <
                                        th scope = "col" > Track ID < /th> <
                                        th scope = "col" > Title < /th> <
                                        th scope = "col" > Playlist ID < /th> <
                                        th scope = "col" > Master ID < /th> <
                                        th scope = "col" > URI < /th> <
                                        th scope = "col" > < /th>

                                        <
                                        /tr> < /
                                        thead > <
                                        tbody > < tr > < td colSpan = "6"
                                        className = "table-text-center" > { response.data.msg } < /td> < /
                                        tr > < /
                                        tbody > < /
                                        table > < /div>)
                                    });

                            }
                        }
                    }

                    render() {
                        return ( <
                            div className = "card card-body mt-3" >
                            <
                            select name = "playlist"
                            className = "form-control"
                            id = "playlist-select"
                            onChange = { this.handleChange }
                            required >
                            <
                            option value = "" > Choose a playlist < /option> <
                            option value = "7" > Rock < /option> <
                            option value = "6" > POP / Dance < /option> <
                            option value = "5" > Metal < /option> <
                            option value = "4" > Country < /option> <
                            option value = "3" > Classic < /option> <
                            option value = "2" > Acoustic < /option> <
                            option value = "1" > Default < /option> < /
                            select > <
                            div > { this.state.mytable } < /div> < /
                            div >
                        );
                    }
                }

                export default Playlist