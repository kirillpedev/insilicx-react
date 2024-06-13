import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components'
import { Form, useLoaderData } from "react-router-dom";
import products from '../Products';

const Product = styled.div`
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 150px;
        margin-bottom: 150px;
        width: 1200px;
`

const Image = styled.img`
        margin-right: 15%;
`

const Info = styled.div`
        display: block;
        font-family: "Noto Sans", sans-serif;
        font-size: 20px;
`

const Title = styled.p`
        font-family: "Noto Sans", sans-serif;
        font-size: 32px;
        font-weight: 300;
`

const Cost = styled.h1`
`


const Decision = styled.div`
`


const ButtonDisabled = styled.button`
        width: 323px;
        height: 47px;
        border-radius: 1px;
        margin-top: 10px;
        font-family: "Noto Sans", sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #ffff;
        background-color: #000;

        &:hover {
        color: #000000;
        background-color: #ffffff;
        transition: 0.2s ease;
        }

        &:disabled{
        color: #000000;
        background-color: #ffffff;
        transition: 0.2s ease;
        cursor: not-allowed;
        }

        &:hover:disabled {
    color: #000000;
        background-color: #ffffff;
        transition: 0.2s ease;
        cursor: not-allowed;
        }
`

const Main = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

`
const Button = styled.button`
        width: 40px;
        height: 40px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-family: "Noto Sans", sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #000;
        background-color: #ffff;

        &:hover {
        background-color: #000;
        color: #ffff;
        transition: 0.2s ease;
        }

        &:focus {
        background-color: #000;
        color: #ffff;
        }

        &:active {
            background-color: #000;
            color: #ffff;
        }

        &:disabled{
        color: #000000;
        background-color: #ffffff;
        transition: 0.2s ease;
        cursor: not-allowed;
        }

`

const Buttons = styled.div`

`

const Description = styled.h2`
        font-family: "Noto Sans", sans-serif;
        font-size: 20px;
        font-weight: normal;
        margin-top: 15px;
`

const ProductPageMain = () => {
    const { id } = useLoaderData();
    const project = products.find(product => product.id === id);
    return (
            <Main>
                <Product>
                    <Image src={project.screenshot} alt="" width="540" height="560"></Image>
                    <Info>
                        <Title>{project.title}</Title>
                        <Cost>{project.cost} ₽</Cost>
                        <Buttons>
                            <Decision>
                                <Button disabled='disabled'>L</Button>
                                <Button disabled='disabled'>XL</Button>
                            </Decision>
                        </Buttons>
                        <ButtonDisabled disabled='disabled'>Нет в наличии</ButtonDisabled>
                        <Description>{project.description}</Description>
                    </Info>
                </Product>
            </Main>
  )
}

export default ProductPageMain
