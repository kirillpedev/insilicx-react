import dress1 from '/src/img/dress1.png'
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components'
import { Form, useLoaderData } from "react-router-dom";
import products from '../products';
import Error404 from "../components/Error404";
import NotAvalibale from "../components/NotAvalibale";

const Main = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    .product .info #error {
        display: none ;
        color: red;
        font-size: 20px;
        font-weight: 400;
    }
    .product {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 150px;
        margin-bottom: 150px;
        width: 1200px;
    }
    .product p {
        font-family: "Noto Sans", sans-serif;
        font-size: 32px;
        font-weight: 300;
        
    }
    .product img {
        margin-right: 15%;

    }

    .product h2 {
        font-family: "Noto Sans", sans-serif;
        font-size: 20px;
        font-weight: normal;
        margin-top: 15px;
    }

    .info {
        display: block;
        font-family: "Noto Sans", sans-serif;
        font-size: 20px;
    }

    .info button {
        width: 323px;
        height: 47px;
        border-radius: 1px;
        margin-top: 10px;
        font-family: "Noto Sans", sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #ffff;
        background-color: #000;
        border: 2px solid black;
        cursor: pointer;
    }

    .button :hover {
        color: #000000;
        background-color: #ffffff;
        transition: 0.2s ease;
    }
  
`

const Buttons = styled.div`
    .decision {
        height: 45px;
        margin-top: 8px;
        margin-bottom: 10px;
    }

    input[name="size"] {
        -webkit-appearance: none;
        appearance: none;
        position: absolute;
        height: 45px;
        width: 45px;
        border: 3px solid black;
        cursor: pointer;
    }

    input[id="x"]::before {
        content: "L";
        position: absolute;
        height: 30px;
        width: 30px;
        color: black;
        font-size: 24px;
        font-weight: 500;
        left: 14px;
        top: 7px;
    }

    input[id="xl"]::before {
        content: "XL";
        position: absolute;
        height: 30px;
        width: 30px;
        color: black;
        font-size: 24px;
        font-weight: 500;
        left: 6px;
        top: 7px;
    }

    input[name="size"]:checked {
        color: white;
        background-color: black;
    }

    input[name="size"]:checked::before {
        color: white;
    }

    #xl {
        margin-left: 55px;
    }
`

const ProductPageMain = () => {
    
    
    const { id } = useLoaderData();
    const project = products.find(product => product.id === id);
    if(!project) {
        return ( 
            <div> 
            <Error404/>
            </div>  
        )
    } 
    else if(!project.available) {
        return ( 
            <div> 
            <NotAvalibale/>
            </div>  
        )
    }
    const myRef = useRef(null);
    const [activebtn, passivebtn] = useState(true);
    const [activebtn1, passivebtn1] = useState(true);
    const [addCart, delCart] = useState(true);
    const changeCart = () => {
        delCart(!addCart);
    }
    const change = () => {
        passivebtn(!activebtn);
    }
    const change1 = () => {
        passivebtn1(!activebtn1);
     }
    
    const changebtn = activebtn ? 'decision' : 'decision__active';
    const changebtn1 = activebtn1 ? 'decision' : 'decision__active';
    const changecart = addCart ? 'В корзину' : 'Убрать из корзины';
    if (!activebtn && !activebtn1) {
        change();
        change1();
        const error = document.getElementById('error');
        error.style.display = 'block';
        error.innerHTML = 'Выберите один размер.'
    }

    else if(!activebtn || !activebtn1) {
        const error = document.getElementById('error');
        error.style.display = 'none';
        error.innerHTML = 'Выберите размер.';
    }

    function select_l(e) {
        e.preventDefault();
        change();
    }
    function select_xl(e) {
        e.preventDefault();
        change1();
    }

    function AddToCart(e) {

        const form = document.getElementById("sizes"); //БАЗА БАЗА БАЗА БАЗА БАЗА
        console.log(form.elements["size"].value); //ОСНОВА ОСНОВА ОСНОВА ОСНОВА

        e.preventDefault();
        if (activebtn && activebtn1) {
                    const error = document.getElementById('error');
                    error.style.display = 'block';
        } 
        else if ((!activebtn || !activebtn1) && addCart) {
            // console.log('da, кнопка: ', addCart)
            changeCart();
            const round = document.getElementById('round'); 
            const total = document.getElementById('total_basket'); 
            const size_l = document.getElementById('button_l')
            const size_xl = document.getElementById('button_xl')
            // console.log(size_l, size_xl)
            size_l.setAttribute('disabled', '');
            size_xl.setAttribute('disabled', '');
            size_l.style.cursor =  'not-allowed';
            size_xl.style.cursor =  'not-allowed';
            round.style.display = 'block'
            total.innerHTML = '1'
            // console.log(total)
            // console.log(project)
        }
        else if ((!activebtn || !activebtn1) && !addCart) {
            changeCart();
            // console.log('da !addcart', addCart)
            const round = document.getElementById('round'); 
            const total = document.getElementById('total_basket'); 
            round.style.display = 'none'
            total.innerHTML = '0'
            const size_l = document.getElementById('button_l')
            const size_xl = document.getElementById('button_xl')
            size_l.style.cursor =  '';
            size_xl.style.cursor =  '';
            // console.log(size_l, size_xl)
            size_l.removeAttribute('disabled', '');
            size_xl.removeAttribute('disabled', '');
            // console.log(total)
            // console.log(project)
        }
      }
      
  return (
        <div className='main'>
            <Main>
                <div className='product'>
                    <img src={project.screenshot} alt="" width="540" height="560"/>
                    <div className='info'>
                        <p>{project.title}</p>
                        <h1>{project.cost} ₽</h1>
                        <Buttons>
                            <div className='decision'>
                                <form id="sizes">
                                    <input id='x' type="radio" name="size" value="100" onClick={zalupa}/>
                                    <input id='xl' type="radio" name="size" value="200"/>
                                </form>
                            </div> 
                        </Buttons>
                        <h1 id='error'>
                            Выберите размер
                        </h1>
                        <div className='button'>
                            <button onClick={AddToCart} className='addCart'>{changecart}</button>
                        </div>
                        <h2>{project.description}</h2>
                    </div>
                </div>
            </Main>
        </div>
    
  )
    }
export default ProductPageMain
