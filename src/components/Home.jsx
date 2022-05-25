import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css'
import './MovieContainer.jsx'
import MovieComponent from './MovieContainer.jsx';
import styled from 'styled-components';
import MovieInfoComponent from './MovieInfoComponent';



const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  gap: 40px;
  justify-content: space-evenly;
  background-color: #black;
`;
function Home() {
    const data = [{ Title: 'Spider-Man', Year: '2002', imdbID: 'tt0145487', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg' },
    { Title: 'The Amazing Spider-Man', Year: '2012', imdbID: 'tt0948470', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg' },
    { Title: 'Spider-Man 2', Year: '2004', imdbID: 'tt0316654', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' },
    { Title: 'Spider-Man: Homecoming', Year: '2017', imdbID: 'tt2250912', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg' },
    { Title: 'Spider-Man: No Way Home', Year: '2021', imdbID: 'tt10872600', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg' }
    ]

    const [text, setText] = useState("");
    const [movie, setMovie] = useState(data);
    const [selectedMovie, onMovieSelect] = useState();


    const changeText = (e) => {
        console.log(e);
        setText(e.target.value);

    }

    const getMovie = (event) => {
        event.preventDefault();
        axios.get(`https://www.omdbapi.com/?s=${text}&apikey=3e7f50b5`)
            .then((response) => {
                console.log(response);
                setMovie(response.data.Search);
            }
            )
    }


    return (
        <> <div className="topnav">
            <div className="left">
                <NavLink className="act" to={'/'} style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#E50914',
                            background: 'black',
                        }
                        : { color: 'white', background: 'black' }
                }>Home</NavLink>
                <form onSubmit={getMovie}>
                    <input type="search" placeholder="Search.." value={text} onChange={changeText} /></form></div>
            <div className="right">
                <NavLink to="/Favorites" className='act' style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#E50914',
                            background: 'black',
                        }
                        : { color: 'white', background: 'black' }}>Favorites</NavLink>
                <NavLink to="/Contacts" className='act' style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#E50914',
                            background: 'black',
                        }
                        : { color: 'white', background: 'black' }}>Contact</NavLink>
            </div></div>

            {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
            <MovieListContainer >
                {
                    movie.length ? movie.map((value, index) => { return (<MovieComponent key={index} movie={value} onMovieSelect={onMovieSelect} />) })
                        : ""}
            </MovieListContainer>


        </>
    )
}

export default Home;