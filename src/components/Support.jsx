import React from 'react'
import styled from 'styled-components'
import shoppingbag from '../svg/shopping-bag.svg'
import headsetsvg from '../svg/headset.svg'

const Button = styled.div`
    z-index: 1;
    position: fixed;
    display: grid;
    grid-row-gap: 25px;
    right: 5%;
    bottom: 5%;
`

const Round = styled.div`
    display: none;
    width: 35px;
    height: 35px;
    border-radius: 150px;
    margin-left: 50px;
    background-color: #1E1E1E;
    position: absolute;
`

const Total = styled.h1`
    color:  white;
    font-family: "Noto Sans", sans-serif;
    margin-left: 10px;
    font-weight: 200;
    font-size: 24px;
    font-weight: 600;
`

const ActionForm = styled.form`
    
`

const Image = styled.img`
    
`

const RoundButton = styled.button`
    width: 70px; 
    height: 70px;
    background-color: white;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`

export default function Support() {
  return (
    <Button>
        <Round id='round'>
            <Total id='total_basket'>0</Total>
        </Round>

        <ActionForm action='/basket'>    
        <RoundButton className='round_button'>
            <Image src={shoppingbag} width={38} height={38} alt=""/>
        </RoundButton>
        </ActionForm>

        <RoundButton className='round_button'>
            <Image src={headsetsvg} alt=""/>
        </RoundButton>
    </Button>
  )
}
