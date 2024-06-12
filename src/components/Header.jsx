import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
      @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    .header {
      display: flex;
      justify-content: space-between;
      align-self: center;
      margin-top: 15px;
      margin-bottom: 7px;
      padding: 0 15% 0 15%;
      height: 50px;
    }

    .header h1 {
      font-size: 35px;
      font-family: "Anonymous Pro", monospace;
      cursor: pointer;
    }

    .header a {
      text-decoration: none;
      color: black;
    }

    .menu {
      display: flex;
      font-family: "Noto Sans", sans-serif;
      grid-gap: 30px;
      font-size: 14px;
      margin-top: 11px;
      justify-content: space-around;
      list-style-type: none;
      text-transform: uppercase;
    }

    .menu a {
      color: black;
      text-decoration: none;
      font-weight: 500;
      font-size: 15px;
    }

    @media (max-width: 850px) {
      .header {
        display: block;
      } 

      .header h1 {
        text-align: center;
      }
      .menu {
        padding-left: 0;
        font-size: 14px;
        margin-top: 11px;
        justify-content: center;
        text-align: center;
      }

      hr {
        margin-top: 35px;
      }
    }
`

const Header = () => {
  return (
    <Container>
      <div className='header_main'>
      <div className='header'>
        <h1><a href='/'>Insilicx inc</a></h1>
        <ul class="menu">
            <li><a href='/'>Каталог</a></li>
            <li><a href='/photos'>Фото</a></li>
            <li><a href='/reviews'>Отзывы</a></li>
        </ul>
      </div>
      <hr></hr>
    </div>
    </Container>
  )
}

export default Header
