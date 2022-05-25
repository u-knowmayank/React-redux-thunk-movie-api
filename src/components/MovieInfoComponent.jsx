import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 3px solid black;
  background-color: #353434;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: white;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const Close = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: red;
  background-color: black;
  height: fit-content;
  padding: 5px;
  border-radius: 50;
  cursor: pointer;
  transition: 0.8s;
  &:hover{
      transform:scale(1.2);
  }
  
`;
const MovieInfoComponent = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=3e7f50b5`)
            .then((response) => setMovieInfo(response.data));
    }, [selectedMovie]);
    return (
        <Container>
            {movieInfo ? (
                <>
                    <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
                    <InfoColumn>
                        <MovieName>
                            {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
                        </MovieName>
                        <MovieInfo>
                            IMDB Rating: <span>{movieInfo?.imdbRating}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Year: <span>{movieInfo?.Year}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Language: <span>{movieInfo?.Language}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Rated: <span>{movieInfo?.Rated}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Released: <span>{movieInfo?.Released}</span>
                        </MovieInfo>

                        <MovieInfo>
                            Genre: <span>{movieInfo?.Genre}</span>
                        </MovieInfo>

                        <MovieInfo>
                            Actors: <span>{movieInfo?.Actors}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Plot: <span>{movieInfo?.Plot}</span>
                        </MovieInfo>
                    </InfoColumn>
                    <Close onClick={() => props.onMovieSelect()}>X</Close>
                </>
            ) : (
                "Loading..."
            )}
        </Container>
    );
};
export default MovieInfoComponent;