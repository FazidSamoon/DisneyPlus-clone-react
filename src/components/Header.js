import React , {useEffect} from 'react';
import styled from 'styled-components'
import {selectUsername, selectUserPhoto, setUserLogin, setSignOut} from "../features/user/userSlice"
import {useSelector, useDispatch} from "react-redux"
import {auth, provider} from "../firebase"
import {useNavigate} from "react-router-dom"


function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUsername);
  const userImg = useSelector(selectUserPhoto);
  const history = useNavigate();

  const signIn = () => {
      auth.signInWithPopup(provider).
      then((result) => {
        let user = result.user;
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        history.push("/")
      })
  }

  const signOut = () => {
    auth.signOut().
    then(() => {
      dispatch(setSignOut())
      history.push("/login")
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))

        history.push("/")
      }
    })
  }, [])

  return (
    
    <NavBar>
      <Logo src="images/logo.svg" />
      { !userName ?
        <Login onClick={signIn}>Login</Login> :
        
        <>
          <NavMenu>
          <a>
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
          </a>

          <a>
            <img src="/images/search-icon.svg" />
            <span>SERARCH</span>
          </a>

          <a>
            <img src="/images/watchlist-icon.svg" />
            <span>WATCHLIST</span>
          </a>

          <a>
            <img src="/images/original-icon.svg" />
            <span>ORIGINAL</span>
          </a>

          <a>
            <img src="/images/Movie-icon.svg" />
            <span>MOVIES</span>
          </a>

          <a>
            <img src="/images/series-icon.svg" />
            <span>SERIES</span>
          </a>
          
      </NavMenu>

      <UserImg src={userImg} onClick={signOut}/>
        </>

      }
      
    </NavBar>
  );
}

export default Header;

const NavBar = styled.nav`
    display: flex;
    height: 70px;
    background: #090b13;
    align-items: center;
    padding: 0 36px;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 80px;
    
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a{
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;

      img{
        height: 20px;
      }

      span{
        font-size: 13px;
        letter-spacing:1.42px;
        position: relative;

        &:after{
          content: "";
          height: 2px;
          background: white;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }
      }

      &:hover{
        span:after{
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
`

const UserImg = styled.img`
    
    height: 48px;
    width: 48px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 15px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    transition: all 0.2s ease 0s;
    cursor:pointer;

    &:hover{
      background-color: #f9f9f9;
      border-color: transparent;
      color: #000;
    }
`