import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import BackgroundImg from "../Assets/images/scale.jpg";
import DetailsLogo from "../Assets/images/details-logo.png";
import PlayIcon from "../Assets/images/play-icon-black.png";
import TrailerIcon from "../Assets/images/play-icon-white.png";
import GroupWatchIcon from "../Assets/images/group-icon.png";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Details() {
  const [movie, setMovie] = useState();

  const { id } = useParams();
  useEffect(() => {
    //grab the data from firebase
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
        }
      });
  }, []);

  console.log(movie);
  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImage} />
          </Background>
          <ImageTitle>
            <img src={DetailsLogo} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src={PlayIcon} />
              <span style={{ color: "black" }}>Play</span>
            </PlayButton>
            <TrailerButton>
              <img src={TrailerIcon} />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src={GroupWatchIcon} />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Details;

const Container = Styled.div`
   min-height: calc(100vh - 70px);
   padding: 0 calc(3.5vw + 5px);
   position: relative;
`;

const Background = Styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left :0;
   right: 0;
   z-index: -1;
   opacity: 0.5;

   img{
       width: 100%;
       height: 100%;
       object-fit: cover;
   }
`;

const ImageTitle = Styled.div`
   height: 30vh;
   min-height: 170px;
   width: 35vw;
   min-width: 200px;
   margin-top: 40px;

   img{
       width: 100%;
       height: 100%;
       object-fit: contain;
   }
`;

const Controls = Styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const PlayButton = Styled.button`
   border-radius: 4px;
   font-size: 15px;
   display: flex;
   align-items: center;
   height: 56px;
   background: rgb(249, 249, 249);
   border: none;
   padding: 0 24px;
   margin-right: 22px;
   cursor: pointer;
   text-decoration: none;
   text-transform: uppercase;
   letter-spacing: 0.8px;


   &:hover{
       background: rgb(198, 198, 198);
   }
`;

const TrailerButton = Styled(PlayButton)`
   background: rgb(0, 0, 0, 0.3);
   border: 1px solid rgb(249, 249, 249);
`;

const AddButton = Styled.button`
   width: 44px;
   height: 44px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius:22px;
   border: 2px solid white;
   background-color: rgb(0, 0, 0 ,0.6);
   cursor: pointer;
   margin-right: 16px;

   span{
       font-size: 30px;
   }
`;

const GroupWatchButton = Styled(AddButton)`
   background: rgb(0, 0, 0);    
`;

const SubTitle = Styled.div`
   color: rgb(249, 249, 249);
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px;
`;

const Description = Styled.div`
   line-height: 1.4;
   font-size: 20px;
   margin-top: 16px;
   max-width: 760px;
`;
