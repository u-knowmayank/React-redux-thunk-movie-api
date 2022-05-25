import styled from "styled-components";
import { FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import './MovieContainer.css'

import { PutUsers } from "../action";




const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin:10px;
    width: 280px;
    border: 1px solid;
    transition: .8s;
    box-shadow: 3px 6px black;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
      }
    background-color:#E8E8E8;
    border-radius: 10px;
`;



const CoverImage = styled.img`
    object-fit: cover;
    height: 380px;
`;
const MovieName = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #272727;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipss;
    overflow: hidden;
`;
const InfoColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const MovieInfo = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #272727;
    text-transform: capitalize;
`


const MovieComponent = (props) => {

    const { Title, Year, Type, Poster } = props.movie;



    const dispatch = useDispatch();
    return (<>
        <MovieContainer

        >

            <CoverImage src={Poster} alt={Title} />


            <MovieName>{Title}</MovieName>
            <InfoColumn>
                <MovieInfo>Year: {Year}</MovieInfo>
                <MovieInfo>Type: {Type}</MovieInfo>
            </InfoColumn>
            <div className="overlay  justify-center align-items-center" >
                <span className="p"  ><button onClick={() => dispatch(PutUsers(props.movie))}>Add to favorites</button></span>
                <span className="changeColor">
                    <FaHeart size={'20px'}
                        onMouseOver={({ target }) => target.style.color = "red"}
                        onMouseOut={({ target }) => target.style.color = "white"}
                    />
                </span>
            </div>
        </MovieContainer >
    </>
    )
}

export default MovieComponent;