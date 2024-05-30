import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
      @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    .header {
      display: flex;
      justify-content: space-between;
      align-self: center;
      margin-top: 25px;
      margin-left: 40px;
      margin-right: 80px;
      height: 50px;
    }

    .header h1 {
    font-size: 32px;
    font-family: "Anonymous Pro", monospace;
    cursor: pointer;
  }
`

const Line = styled.div`
  hr {
    margin-left: -10px;
    margin-right: -10px;
  }

`

const Menu = styled.div`
  .menu {
      display: flex;
      font-family: "Noto Sans", sans-serif;
      grid-gap: 30px;
      font-size: 14px;
      margin-top: 6px;
      justify-content: space-around;
      list-style-type: none;
      text-transform: uppercase;
  }

  .menu a {
      color: black;
      text-decoration: none;
      font-weight: 400;
  }

  .menu :hover {
      font-size: 16px;
      transition: 0.2s ease;
  }   
`
const Header = () => {
  return (
    <Container>
      <div className='header_main'>
      <div className='header'>
        <h1 href=''>Insilicx inc.</h1>
          <Menu>
            <ul class="menu">
                <li><a href=''>Каталог</a></li>
                <li><a href=''>Фото</a></li>
                <li><a href=''>Отзывы</a></li>
            </ul>
          </Menu>
      </div>
      <div>
        <Line>
          <hr></hr>
        </Line>
        </div>
    </div>
    </Container>
  )
}

export default Header
