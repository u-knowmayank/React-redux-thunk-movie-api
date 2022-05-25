import React from 'react';
import Navbar from './Navbar';
import { useSelector } from "react-redux";
import MovieFavComponent from './MovieFavListCont';

import './MovieFavListCont.jsx'
import styled from 'styled-components';

const MovieListContainer = styled.div`
margin-top:50px;  
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  gap: 40px;
  justify-content: space-evenly;
  background-color: #black;
`;


function Favorites() {
    const addFavorite = useSelector(state => state.addFavorite)
    const unique = new Set([...addFavorite])
    console.log(unique, "unique")
    return (
        <>
            <Navbar />
            <MovieListContainer>
                {addFavorite.length ? addFavorite.map((value, i) => { return (<MovieFavComponent key={i} movie={value} />) })
                    : <p style={{ margin: "40px", color: "red" }}>"No Movies in favorites Yet..."</p>
                }
            </MovieListContainer>

        </>
    )
}

export default Favorites