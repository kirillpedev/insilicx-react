import React from 'react'
import styled from 'styled-components'
import shoppingbag from '../svg/shopping-bag.svg'
import headsetsvg from '../svg/headset.svg'
import pedofil from '/src/img/pedofil.jpg'

const Chat = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    .chat{
    right: -12px; /* Расстояние от правого края окна браузера */
    top: 30%;
    position: absolute;
    display: none;
    width: 260px;
    height: 655px;
    background-color: #0C0C0C;
    border-radius: 15px;
    }
    & img {
        border-radius: 50px;
    }

    .chat h1 {
        margin-top: 10%;
        color: #fff;
        text-align: center;
        font-family: "Anonymous Pro", monospace;
        font-size: 30px;
        font-weight: bold;
    }

    .chat h3 {
        margin-top: 25%;
        color: #ffffff30;
        text-align: center;
        font-family: "Anonymous Pro", monospace;
        font-size: 32px;
        font-weight: bold;
    }
`

const Message = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  
    .message {
        display: flex;
        background-color: #212121;
        width: 152px;
        height: 40px;
        margin-top: 140%;
        margin-left: 5%;
        color: #fff;
        font-family: "Noto Sans", sans-serif;
        font-weight: bold;
        border-radius: 21px;
    }

    .message p {
        /* margin-top: 15px; */
        padding-left: 2px;
        color: #ffffff3b;
        font-family: "Noto Sans", sans-serif;
        font-size: 10px;
        font-weight: bold;
    }

    .message h2 {
        /* margin-top: 15px; */
        padding-left: 8px;
        color: #fff;
        font-family: "Noto Sans", sans-serif;
        font-size: 10px;
        font-weight: bold;
    }
`

const Button = styled.div`
    .btn_pos{
        position: fixed;
        display: grid;
        grid-row-gap: 25px;
        right: 90px;
        bottom: 30%;
    }

    #round {
        display: none;
        width: 35px;
        height: 35px;
        border-radius: 150px;
        margin-left: 50px;
        background-color: #1E1E1E;
        position: absolute;
    }

   
    .round_button {
        width: 70px; 
        height: 70px;
        background-color: white;
        border-radius: 50%;
        border: none;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

    
    #round h1 {
        color:  white;
        font-family: "Noto Sans", sans-serif;
        margin-left: 10px;
        font-weight: 200;
        font-size: 24px;
        font-weight: 600;
    }

`

export default function Support() {
  return (
    <Button>
        {/* <Chat>
            <div className='chat'>
                <h1>Что случилось сын берёзы?</h1>
                <Message>
                    <div className='message'>
                    <img src={pedofil} alt="" width="45" height="45"/>
                        <p>Advokat666<h2>Я сру. Хули надо?</h2></p>
                    </div>  
                </Message> 
                <h3>Функция чата заблокирована.</h3>
            </div>
        </Chat> */}
        <div className='btn_pos'>
            <div id='round'>
                <h1 id='total_basket'>1</h1>
            </div>
            <form action='/basket'>    
            <button className='round_button'>
                <img src={shoppingbag} width={38} height={38} alt=""/>
            </button>
            </form>
            <button className='round_button'>
                <img src={headsetsvg} alt=""/>
            </button>
        </div>
        
    </Button>
  )
}
