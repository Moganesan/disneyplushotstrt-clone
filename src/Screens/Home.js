import React, { useEffect } from "react";
import Styled from "styled-components";
import Background from "../Assets/images/home-background.png";
import ImageSlider from "../Components/ImageSlider";
import Viewers from "../Components/Viewers";
import Movies from "../Components/Movies.js";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);
  return (
    <Container style={{ backgroundImage: `url(${Background})` }}>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = Styled.div`
   min-height: calc(100vh - 70px);
   padding: 0 calc(3.5vw + 5px);
   position: relative;
   overflow-x: hidden;

   &:before:{
     content: "";
     position: absolute;
     top:0;
     bottom:0;
     left:0;
     right:0; 
     z-index: -1;
     background-repeat: no-repeat;
     background-attachment: fixed;
     background-position: center;
     background-size: cover;
   }
`;
