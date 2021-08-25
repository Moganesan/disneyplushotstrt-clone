import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              <Wrap key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img src={movie.cardImage} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = Styled.div`
   margin-top: 60px;
   margin-bottom: 60px;
`;

const Content = Styled.div`
   display: grid;
   grid-gap: 25px;
   grid-template-columns: repeat(6, minmax(0,1fr));
   margin-top: 20px;

   @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Wrap = Styled.div`
   border-radius: 10px;
   overflow: hidden;
   border: 3px solid rgb(249, 249, 249, 0.1);
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   cursor: pointer;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

   img{
       width: 100%;
       height: 100%;
       object-fit: cover; 
   }

   &:hover{
       transform: scale(1.05);
       box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
       border-color: rgb(249, 249, 249, 0.8);
   }
`;
