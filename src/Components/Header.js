import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import disneyLogo from "../Assets/images/logo.svg";
import HomeIcon from "../Assets/images/home-icon.svg";
import SearchIcon from "../Assets/images/search-icon.svg";
import WatchListIcon from "../Assets/images/watchlist-icon.svg";
import OriginalsIcon from "../Assets/images/original-icon.svg";
import MovieIcon from "../Assets/images/movie-icon.svg";
import SeriesIcon from "../Assets/images/series-icon.svg";
import MenuIcon from "../Assets/images/menu.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import UserLogo from "../Assets/images/user.png";
import LogoutLogo from "../Assets/images/log-out.png";

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const history = useHistory();
  const [MenuV, setMenuV] = useState("hidden");

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((res) => {
      let user = res.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  const [menu, setMenu] = useState("-200px");
  const menuList = {
    left: menu,
  };

  return (
    <Container>
      <MobileMenu style={menuList}>
        <ul>
          <li>
            <img src={HomeIcon} />
            Home
          </li>
          <li>
            <img src={SearchIcon} /> Search
          </li>
          <li>
            <img src={WatchListIcon} />
            Watchlist
          </li>
          <li>
            <img src={OriginalsIcon} />
            Originals
          </li>
          <li>
            <img src={MovieIcon} /> Movies
          </li>
          <li>
            <img src={SeriesIcon} /> Series
          </li>
        </ul>
        <span
          onClick={() => {
            setMenu("-200px");
          }}
        >
          ✕
        </span>
      </MobileMenu>
      <MenuButton>
        <img
          onClick={() => {
            setMenu("0px");
          }}
          src={MenuIcon}
        />
      </MenuButton>
      <Logo src={disneyLogo} />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to={"/"}>
              <a>
                <img src={HomeIcon} />
                <span>Home</span>
              </a>
            </Link>
            <a>
              <img src={SearchIcon} />
              <span>Search</span>
            </a>
            <a>
              <img src={WatchListIcon} />
              <span>Watchlist</span>
            </a>
            <a>
              <img src={OriginalsIcon} />
              <span>Originals</span>
            </a>
            <a>
              <img src={MovieIcon} />
              <span>Movies</span>
            </a>
            <a>
              <img src={SeriesIcon} />
              <span>Series</span>
            </a>
          </NavMenu>
          <Profile
            onClick={() => {
              if (MenuV == "hidden") {
                setMenuV("visible");
              } else {
                setMenuV("hidden");
              }
            }}
            src={userPhoto}
          />
          <MenuContainer style={{ visibility: MenuV }}>
            <Menu>
              <span
                style={{ fontSize: 15, fontWeight: "bold", color: "#F9F9F9" }}
              >
                {userName}
              </span>
              <Button>
                <img style={{ width: 20 }} src={UserLogo} />
                <span>My Account</span>
              </Button>
              <Button onClick={signOut}>
                <img style={{ width: 20 }} src={LogoutLogo} />
                <span>Log Out</span>
              </Button>
            </Menu>
          </MenuContainer>
        </>
      )}
    </Container>
  );
}

export default Header;

const MenuButton = Styled.div`
   display: none;
`;

const MobileMenu = Styled.div`
    *{
      padding: 0;
    }
    position: absolute;
    height: 100vh;
    width: 200px;
    background: #192133;
    top: 0;
    text-align: left;
    z-index: 2;
    transition: 1s;
    overflow-y: scroll;

    span{
      display: flex;
      width: 30px;
      height: 30px;
      background: #192133;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      position: absolute;
      cursor: pointer;
      left: 80%;
      top: 5px;
      right: 0;
      &:hover{
        background: #1B262C;
      }
    }
   
    ul{
      list-style: none;
      li{
        padding: 10px;
        font-size: 13px;
        font-weight: 500;
    
        display: flex;
        align-items: center;
        &:hover{
          background: rgb(0, 0, 0, 0.2);
        }

        p{
          font-size: 15px;
          font-weight: bold;
          margin-left: 10px;
          margin-bottom: 0px;
        }
        img{
          width: 20px;
        }
      }
    }
`;

const Logo = Styled.img`
   width: 80px;
   cursor: pointer;
`;

const NavMenu = Styled.div`
   display: flex;
   padding: 0 36px;
   align-items: center;
   flex: 1;
   a{
       display: flex;
       align-items: center;
       padding: 0 16px;
       text-transform: uppercase;
       cursor: pointer;
       text-decoration: none;
       span{
           letter-spacing: 1.42px;
           font-size: 13px;
           position: relative;

           &:after{
              content: "";
              background: white;
              height: 2px;
              position: absolute;
              left: 0;
              right: 0;
              bottom: -6px;
              opacity: 0;
              transform-origin: left center; 
              transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
              transform: scaleX(0);
           }
       }

       &:hover{
         span:after{
           transform: scaleX(1);
           opacity: 1;
         }
       }
       img{
           height:20px;
       }
   }
`;

const MenuContainer = Styled.div`
   height: 70px;
   position: absolute;
   width: 85%;
`;

const Profile = Styled.img`
   width:48px;
   height:48px;
   border-radius:24px;
   cursor:pointer;
`;

const Login = Styled.div`
   border: 1px solid #f9f9f9;
   padding: 8px 16px;
   border-radius: 4px;
   text-transform: uppercase;
   background: rgb(0, 0, 0, 0.6);
   cursor: pointer;

   &:hover{
     background-color: #f9f9f9;
     color: #000;
     border-color: transparent;
   }
`;

const LoginContainer = Styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-end;
`;

const Menu = Styled.div`
   display: flex;
   flex-direction: column;
   width: 140px;
   height: 150px;
   justify-content: center; 
   position: absolute;
   top: 70px;
   left: 100%;
   right: 0;
   bottom: 0;
   z-index: 1;
   background: #162731;
   align-self: flex-end;
   border-radius: 4px;
   -webkit-box-shadow: 6px 6px 22px -4px rgba(0,0,0,0.75);
   -moz-box-shadow: 6px 6px 22px -4px rgba(0,0,0,0.75);
   box-shadow: 6px 6px 22px -4px rgba(0,0,0,0.75);

   span{
     text-align: center;
     padding: 10px 0;
   }
`;

const Button = Styled.button`
    background: #162731;
    height: 35px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      margin-right: 10px;
    }

    &:hover{
      background: #0C111B;
    }
`;

const Container = Styled.div`
   height: 70px;
   background-color: #090b13;
   display: flex;
   align-items: center;
   padding: 0 36px;
   overflow-x: hidden;

      /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      justify-content: space-between;
      padding: 0px 10px;
      ${NavMenu}{
        display: none;
      }
      ${MenuButton}{
        display: block;
      }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding: 0px 10px;
      ${NavMenu}{
        display: none;
      }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      padding: 0px 10px;
      ${NavMenu}{
        display: flex;
        padding: 0px;
        align-items: center;
        a{
            display: flex;
            align-items: center;
            padding: 0 10px;
            text-transform: uppercase;
            cursor: pointer;
            text-decoration: none;
            span{
                letter-spacing: 1.42px;
                font-size: 13px;
                position: relative;

                &:after{
                    content: "";
                    background: white;
                    height: 2px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -6px;
                    opacity: 0;
                    transform-origin: left center; 
                    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                    transform: scaleX(0);
                }
            }

            &:hover{
              span:after{
                transform: scaleX(1);
                opacity: 1;
              }
            }
            img{
                height:20px;
            }
        }
      }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      
    }
`;
