import React from 'react'
import styled from 'styled-components'
import {Animated} from "react-animated-css";
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    
    
`

const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 7px;
  padding: 0 15% 0 15%;
  height: 50px;

  @media (max-width: 850px) {
    display: block;
  }
    
`

const Headline = styled.h1`
  font-size: 35px;
  font-family: "Anonymous Pro", monospace;
  cursor: pointer;

  @media (max-width: 850px) {
    text-align: center;
  }
`

const HeadlineLink = styled.a`
  text-decoration: none;
  color: black;
`

const Menu = styled.ul`
  display: flex;
  font-family: "Noto Sans", sans-serif;
  grid-gap: 30px;
  font-size: 14px;
  margin-top: 11px;
  justify-content: space-around;
  list-style-type: none;
  text-transform: uppercase;

  @media (max-width: 850px) {
    padding-left: 0;
    font-size: 14px;
    margin-top: 11px;
    justify-content: center;
    text-align: center;
  }
`

const MenuList = styled.li`
`

const Link = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
`

const Hr = styled.hr`
  @media (max-width: 850px) {
    margin-top: 35px;
  }
`

const Header = () => {
  return (
    <Container>
      <Animated animationIn="fadeInUp" animationInDuration='900'   isVisible={true}>
      <HeaderMain>
        <Headline><HeadlineLink href='/'>Insilicx inc</HeadlineLink></Headline>
        <Menu class="menu">
            <MenuList><Link href='/'>Каталог</Link></MenuList>
            <MenuList><Link href='/photos'>Фото</Link></MenuList>
            <MenuList><Link href='/reviews'>Отзывы</Link></MenuList>
        </Menu>
      </HeaderMain>
      <Hr/>
    </Animated>
    </Container>
  )
}

export default Header
