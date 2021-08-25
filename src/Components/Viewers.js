import React from "react";
import Styled from "styled-components";
import DisneyLogo from "../Assets/images/viewers-disney.png";
import PixarLogo from "../Assets/images/viewers-pixar.png";
import MarvelLogo from "../Assets/images/viewers-marvel.png";
import StarWarsLogo from "../Assets/images/viewers-starwars.png";
import NationalLogo from "../Assets/images/viewers-national.png";
import disneyVideo from "../Assets/videos/disney.mp4";
import pixarVideo from "../Assets/videos/pixar.mp4";
import marvelVideo from "../Assets/videos/marvel.mp4";
import nationalVideo from "../Assets/videos/national-geographic.mp4";
import starWarsVideo from "../Assets/videos/star-wars.mp4";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={DisneyLogo} />
        <Video autoPlay loop muted>
          <source src={disneyVideo} type="video/mp4" />
        </Video>
      </Wrap>
      <Wrap>
        <img src={PixarLogo} />
        <Video autoPlay loop muted>
          <source src={pixarVideo} type="video/mp4" />
        </Video>
      </Wrap>
      <Wrap>
        <img src={MarvelLogo} />
        <Video autoPlay loop muted>
          <source src={marvelVideo} type="video/mp4" />
        </Video>
      </Wrap>
      <Wrap>
        <img src={StarWarsLogo} />
        <Video autoPlay loop muted>
          <source src={starWarsVideo} type="video/mp4" />
        </Video>
      </Wrap>
      <Wrap>
        <img src={NationalLogo} />
        <Video autoPlay loop muted>
          <source src={nationalVideo} type="video/mp4" />
        </Video>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = Styled.div`
   margin-top: 60px;
   display: grid;
   grid-template-columns: repeat(5, minmax(0, 1fr));
   grid-gap: 25px;

   @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Video = Styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  visibility: hidden;
  width: 100%;
  height: 100%;
`;

const Wrap = Styled.div`
   border: 3px solid rgb(249, 249, 249, 0.1);
   border-radius: 10px;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   cursor: pointer;
   position: relative;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
   overflow: hidden;

   
   img{
       width: 100%;
       height: 100%;
       object-fit: cover;
   }

   &:hover{
       transform: scale(1.05);
       border-color: rgb(249, 249, 249, 0.8);
       ${Video}{
        visibility: visible;
       }
   }

`;
