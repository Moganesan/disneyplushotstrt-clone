import React from "react";
import Styled from "styled-components";
import facebookLogo from "../Assets/images/facebook-logo.svg";
import twitterLogo from "../Assets/images/twitter-logo.svg";
import playStoreLogo from "../Assets/images/play-store-logo.svg";
import AppStoreLogo from "../Assets/images/app-store-logo.svg";

export default function footer() {
  return (
    <Container>
      <Content>
        <Links>
          <a>
            <span>About Disney+ Hotstar</span>
          </a>
          <a>
            <span>Terms of Use</span>
          </a>
          <a>
            <span>Privacy Policy</span>
          </a>
          <a>
            <span>FAQ</span>
          </a>
          <a>
            <span>Feedback</span>
          </a>
          <a>
            <span>Careers</span>
          </a>
        </Links>
        <p>
          © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </p>
      </Content>
      <SocialLinks>
        <span>Connect with us</span>
        <SocialLogo>
          <LogoContainer>
            <img src={facebookLogo} />
          </LogoContainer>
          <LogoContainer>
            <img src={twitterLogo} />
          </LogoContainer>
        </SocialLogo>
      </SocialLinks>
      <App>
        <span>Disney+ Hotstar App</span>
        <AppLogo>
          <AppLogoContainer>
            <img src={playStoreLogo} />
            <span>Google Play</span>
          </AppLogoContainer>
          <AppLogoContainer>
            <img src={AppStoreLogo} />
            <span>App Store</span>
          </AppLogoContainer>
        </AppLogo>
      </App>
    </Container>
  );
}

const Container = Styled.div`
   height: 154px;
   background-color: #090b13;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 36px;
   overflow-x: hidden;
`;

const Content = Styled.div`
   display: flex;
   flex-direction: column;
   p{
       max-width: 500px;
       font-size: 12px;
       padding: 0 10px;
       margin-top: 15px;
   }
`;

const Links = Styled.div`
   display: flex;
   a{
       padding: 0 10px;
       cursor: pointer;
       font-weight: 400;
       font-size: 15px;
       &:hover{
           span{
            color: #1f80e0;
           }
       }
   }
`;

const SocialLinks = Styled.div`
   span{
    font-weight: 400;
    font-size: 15px;
   }
`;

const App = Styled.div`
`;

const SocialLogo = Styled.div`
    display: flex;
    justify-content: center;
`;

const LogoContainer = Styled.div`
   width: 40px;
   height: 40px;
   background: #192133;
   display: flex;
   margin-right: 5px;
   margin-left: 5px;
   align-items: center;
   justify-content: center;
   border-radius: 4px;
   cursor: pointer;
   margin-top: 10px;

   &:hover{
    background: #1F80E0;
   }
   img{
       width: 20px;
   }
`;

const AppLogo = Styled.div`
   display: flex;
`;

const AppLogoContainer = Styled.div`
   width: 130px;
   height: 40px;
   background: #192133;
   display: flex;
   align-item: center;
   border-radius: 4px;
   margin-left: 5px;
   margin-right: 5px;
   margin-top: 10px;
   justify-content: center;
   cursor: pointer;
   img{
       width: 20px;
   }

   &:hover{
       background: #1F80E0;
   }

   span{
      margin-top: 9px;
      margin-left: 5px;
      font-weight: 490;
   }
`;
