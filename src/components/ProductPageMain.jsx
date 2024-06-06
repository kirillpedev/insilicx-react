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
    }

    .button :hover {
        color: #000000;
        background-color: #ffffff;
        transition: 0.2s ease;
        box-shadow: 0 9px 9px 1px rgba(0,0,0,0.24)
    }
  
`

const Buttons = styled.div`
    .decision button {
        max-width: 40px;
        max-height: 40px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-family: "Noto Sans", sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #000;
        background-color: #ffff;
    }
    .decision .decision__active {
    max-width: 40px;
    max-height: 40px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-family: "Noto Sans", sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
   } 
    /* .decision :hover {


        box-shadow: 0 6px 6px 0 rgba(0,0,0,0.24), 0 6px 5px 0 rgba(0,0,0,0.19);
        background-color: #000;
        color: #ffff;
        transition: 0.2s ease;
    } */
    /* .decision :focus {
        background-color: #000;
        color: #ffff;
   }
   .decision :active {
    background-color: #000;
    color: #ffff;
   }
    */


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
        error.innerHTML = 'Ошибка: выберите один размер.'
    }
    else if(!activebtn || !activebtn1) {
        const error = document.getElementById('error');
        // console.log(error);
        error.style.display = 'none';
        error.innerHTML = 'Ошибка: Выберите размер.'
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
    // const handleClick = (event) => {
    //     if (activebtn && activebtn1) {
    //         const cor = document.getElementById('error');
    //         console.log(cor)
    //         cor.style.display = 'block';
    //     } 
    // };
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
                                <button id='button_l' onClick={select_l} className={changebtn}>L</button>
                                <button id='button_xl' onClick={select_xl} className={changebtn1}>XL</button>
                            </div>
                        </Buttons>
                        <h1 id='error'>
                            Ошибка: Выберите размер
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
//}
//{/* 
// const ProductPageMain = () => {
//     const location = useLocation();
//   return (
//         <div className='main'>
//             <Main>
//                 <div className='product'>
//                     <img src={location.state.photo} alt="" width="540" height="560"/>
//                     <div className='info'>
//                         <p>{location.state.name}</p>
//                         <h1>{location.state.cost}</h1>
//                         <Buttons>
//                             <div className='decision'>
//                                 <button>L</button>
//                                 <button>XL</button>
//                             </div>
//                         </Buttons>
//                         <div className='button'>
//                             <button>В корзину</button>
//                         </div>
//                         <h2>Гладкий плюш, оверсайз крой<br>
//                         </br>Принт - машинная вышивка</h2>
//                     </div>
//                 </div>
//             </Main>
//         </div>
    
//   )
// } */}
// const ProductPageMain = () => {
//     const { id } = useLoaderData();
//     const project = products.find(product => product.id === id);
//     return (
//         <div className='main'>
//             <Main>
//                 <div className='product'>
//                     <img
//                         src={project.screenshot}
//                         alt=''
//                         width={540}
//                         height={560}
//                     />
//                     <div className='info'></div>
//                     <p>{project.title}</p>
//                     <h1>{project.cost}</h1>
//                     <Buttons>
//                            <div className='decision'>
//                                 <button>L</button>
//                                 <button>XL</button>
//                             </div>
//                     </Buttons>
//                     <div className='button'>
//                             <button>В корзину</button>
//                     </div>
//                     <h2>Гладкий плюш, оверсайз крой<br>
//                     </br>Принт - машинная вышивка</h2>
//                 </div>
//             </div>
//         </Main>

//     )
// }
export default ProductPageMain
