import React from 'react';
import axios from 'axios';
import './App.css';

//functional component to list each track of playlist from data base
const ResultList = (props) => {

    const results = props.results.map(result => {


        const onAddClick = async(event) => {
            var playlistId;
            if (result.genre === 'Rock')
                playlistId = 7;
            else if (result.genre === 'Pop' || result.genre === 'Dance')
                playlistId = 6;
            else if (result.genre === 'Metal')
                playlistId = 5;
            else if (result.genre === 'Country')
                playlistId = 4;
            else if (result.genre === 'Classic')
                playlistId = 3;
            else if (result.genre === 'Acoustic')
                playlistId = 2;
            else
                playlistId = 1;

            // const response = await
            axios.post('http://localhost:8080/tracks', {
                playlist: playlistId,
                title: result.title,
                uri: result.master_url + result.uri,
                masterId: result.id,
            });
        }



        return ( <
            div className = "card mb-2 mt-2"
            key = { result.id } > < div className = "row no-gutters" >
            <
            div className = "col-md-2" >
            <
            img className = "card-img"

            alt = { result.title }
            src = { result.cover_image }
            /></div >
            <
            div className = "col-md-10" >
            <
            div className = "card-body" >
            <
            div >
            <
            p className = "card-title" > Title < b > { result.title } < /b>< /p > < /div > <
            p className = "card-text" >
            genre < b > { result.genre } < /b></p >
            <
            button className = "btn btn-primary btn-lg"
            onClick = { onAddClick } > Add to PlayList < /button >


            <
            /div></
            div > < /
            div >
            <
            /div>
        );

    });

    console.log(props.results);
    return <div > { results } < /div>
};
export default ResultList;