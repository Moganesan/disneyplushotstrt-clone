import React from "react";
import Styled from "styled-components";
import Background from "../Assets/images/login-background.jpg";
import Logo from "../Assets/images/cta-logo-one.svg";
import Logo2 from "../Assets/images/cta-logo-two.png";

function Login() {
  return (
    <Container>
      <Content>
        <img src={Logo} />
        <SignUp>Get all there</SignUp>
        <Description>
          Id amet nisi pariatur in laboris commodo aliquip sit ea veniam.
          Pariatur eu consequat pariatur eu labore sit Lorem. Lorem aliquip
          adipisicing proident laboris sunt et id quis mollit consequat.
        </Description>
        <img src={Logo2} />
      </Content>
    </Container>
  );
}

export default Login;

const Container = Styled.div`
   position: relative;
   height: calc(100vh - 70px);
   display: flex;
   align-items: center;
   justify-content: center;

   &:before{
       background: url(${Background});
       background-size: cover;
       background-repeat: no-repeat;
       content: "";
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       z-index: -1;
   }
`;

const Content = Styled.div`
   max-width: 650px;
   padding: 80px 40px;
   width: 90%;
   display: flex;
   flex-direction: column;
`;

const SignUp = Styled.a`
   width: 100%;
   background-color: #0063e5;
   padding: 17px 0;
   color: #f9f9f9;
   text-transform: uppercase;
   font-weight: bold;
   text-align: center;
   border-radius: 4px;
   font-size: 18px;
   cursor: pointer;
   margin-top: 10px;
   letter-spacing: 1.5px;

   &:hover{
       background: #0483ee;
   }
`;

const Description = Styled.p`
   font-size: 11px;
   letter-spacing: 1.5px;
   text-align: center;
   line-height: 1.5;
   margin-bottom: 10px;
   margin-top: 10px;
`;
