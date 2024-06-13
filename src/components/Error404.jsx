import React from 'react'
import styled from 'styled-components'
import { useRouteError } from "react-router-dom";


const Main = styled.div`
  margin-bottom: 5%;
`

const Text = styled.h1`
    margin-top: 3%;
    font-family: "Noto Sans", sans-serif;
    font-size: 164px;
    font-weight: bold;
    text-align: center;
    position: static;
    justify-content: center;
`

const Text2 = styled.h2`
    font-family: "Noto Sans", sans-serif;
    font-size: 32px;
    font-weight: 300;
    position: static;
    text-align: center;
    justify-content: center;
`
const Text3 = styled.h3`
    font-family: "Noto Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    padding-top: 32px;
    position: static;
    text-align: center;
    justify-content: center;
`
const Button = styled.div`
    margin-top: 20px;
    justify-content: center;
    display: flex;
`

const ButtonBack = styled.button`
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

    &:hover {
        background-color: #ffff;
        font-size: 22px;
        color: #000;
        transition: 0.2s ease;
    }
`

const Form = styled.form`
   text-decoration: none;
`
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <Main>
        <Text>404</Text>
        <Text2>страница не найдена</Text2>
        <Text3>страница, на которую вы пытались <br></br>попасть, не существует или была<br></br>удалена</Text3>
        <Button>
            <Form action='/'>
              <ButtonBack>Вернуться на главную</ButtonBack>
            </Form>
        </Button>
    </Main>
  )
}

