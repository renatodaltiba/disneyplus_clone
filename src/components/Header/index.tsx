/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Container, Logo, NavMenu, Login } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" alt="Logo disney plus" />
      </Logo>

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

      <Login>Login</Login>
    </Container>
  )
}
