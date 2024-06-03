import React from 'react'
import styled from 'styled-components'
import { useRouteError } from "react-router-dom";
const Text = styled.div`
   h1 {
    margin-top: 3%;
    font-family: "Noto Sans", sans-serif;
    font-size: 164px;
    font-weight: bold;
    text-align: center;
    position: static;
    justify-content: center;
   }
`
const Text2 = styled.div`
    h2 {
    font-family: "Noto Sans", sans-serif;
    font-size: 32px;
    font-weight: 300;
    position: static;
    text-align: center;
    justify-content: center;
   }
`
const Text3 = styled.div`
    h3 {
    font-family: "Noto Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    padding-top: 32px;
    position: static;
    text-align: center;
    justify-content: center;
   }
`
const Button = styled.div`
    
    .button-1 {
        margin-top: 20px;
        justify-content: center;
        display: flex;
    }
    button {
        border-radius: 2px;
        background-color: black;
        color: white;
        width: 323px;
        height: 47px;
        margin-bottom: 20%;
        font-family: "Noto Sans", sans-serif;
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: bold;
        cursor: pointer;
    }

    .button-1 :hover {
        /* box-shadow: 0 6px 6px 0 rgba(0,0,0,0.24), 0 6px 5px 0 rgba(0,0,0,0.19); */
        background-color: #ffff;
        font-size: 22px;
        color: #000;
        transition: 0.2s ease;
    }
    form {
      text-decoration: none;
    }

`
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className='main'>
      <Text>
        <h1>404</h1>
      </Text>
      <Text2>
        <h2>страница не найдена</h2>
      </Text2>
      <Text3>
        <h3>страница, на которую вы пытались <br></br>попасть, не существует или была<br></br>удалена</h3>
      </Text3>
      <Button>
        <div className='button-1'>
        <form action='/'>
          <button>Вернуться на главную</button>
        </form>
        </div>
      </Button>
    </div>
  )
}

