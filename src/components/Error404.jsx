import React from 'react'
import styled from 'styled-components'
const Text = styled.div`
   h1 {
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
        justify-content: center;
        display: flex;

    }
    button {
        background-color: black;
        color: white;
        width: 323px;
        height: 47px;
        font-family: "Noto Sans", sans-serif;
        font-size: 23px;
        font-weight: bold;
        text-align: center;
        justify-content: center;
        
    }
`
const Error404 = () => {
  return (
    <div>
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
        <button className='button-1'>Вернуться на главную</button>
      </Button>
    </div>
  )
}

export default Error404
