import React from 'react'
import styled from 'styled-components'
import shoppingbag from '../svg/shopping-bag.svg'
import headsetsvg from '../svg/headset.svg'

const Button = styled.div`

    position: fixed; /* Фиксированное положение */
    display: grid;
    grid-row-gap: 25px;
    right: 60px; /* Расстояние от правого края окна браузера */
    top: 78%; /* Расстояние сверху */

    .round-button {
        width: 70px; height: 70px;
        background-color: white;
        border-radius: 50%;
        border: none;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

`

export default function Support() {
  return (
    <Button>
        <button className='round-button'>
            <img src={shoppingbag} width={38} height={38} alt=""/>
        </button>
        <button className='round-button'>
            <img src={headsetsvg} alt=""/>
        </button>
    </Button>
  )
}
