/* eslint-disable @next/next/no-img-element */
import { signInWithPopup } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase'
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails
} from '../../features/user/userSlice'

import {
  Container,
  Logo,
  NavMenu,
  Login,
  UserImg,
  DropDown,
  SignOut
} from './styles'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const username = useSelector(selectUserName)
  const photo = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
        navigate('home')
      }
    })
  }, [username])

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const Logout = () => {
    auth.signOut().then(() => {
      dispatch(
        setUserLoginDetails({
          username: '',
          photo: '',
          email: ''
        })
      )
      navigate('/')
    })
  }

  const setUser = (user: any) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }

  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" alt="Logo disney plus" />
      </Logo>

      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src="/images/home-icon.svg" alt="Icone Home" />
              <span>Home</span>
            </a>
            <a href="/">
              <img src="/images/search-icon.svg" alt="Icone Home" />
              <span>SEARCH</span>
            </a>
            <a href="/">
              <img src="/images/watchlist-icon.svg" alt="Icone Home" />
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img src="/images/movie-icon.svg" alt="Icone Home" />
              <span>MOVIES</span>
            </a>
            <a href="/">
              <img src="/images/original-icon.svg" alt="Icone Home" />
              <span>ORIGINALS</span>
            </a>
            <a href="/">
              <img src="/images/series-icon.svg" alt="Icone Home" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={photo} alt="" />
            <DropDown>
              <span onClick={Logout}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Container>
  )
}
