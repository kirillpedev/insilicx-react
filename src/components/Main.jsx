import React, { Component, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import PortfolioItem from './PortfolioItem';
import {Animated} from 'react-animated-css'
import Products from '../products';
const TITLE = 'Каталог | Insilicx inc.';

const Span = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    padding-bottom: 200px;
    width: 100%;
    .content {
        margin-top: 40px;
        height: 330px;
        width: 215px;
    }
    .content h1 {
        margin-top: 20px;
        font-family: "Noto Sans", sans-serif;
        font-size: 18px;
        font-weight: 300;
        color: black;
        text-decoration: none;
    }
    .content h2 {
        font-family: "Noto Sans", sans-serif;
        font-size: 24px;
        font-weight: 600;
    }
    a {
        text-decoration: none;
    }

`

const Span_1 = styled.span`
    padding: 0 10% 0 10%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
    justify-content: center;
    justify-items: center;   
    grid-gap: 50px;
`

const Main = () => {
    const navigate = useNavigate();
  return (
    <Animated animationIn="fadeIn" animationInDelay='600' animationInDuration='600' isVisible={true}>
    <Span>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Span_1>
            {Products.map((product) => (
                <PortfolioItem key={product.id} work={product} />
            ))}
        </Span_1>
    </Span>
    </Animated>
  )
}

export default Main;