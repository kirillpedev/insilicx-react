import React, { Component, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import dress1 from '/src/img/dress1.png'
import dress2 from '/src/img/dress2.png'
import dress3 from '/src/img/dress3.png'
import dress4 from '/src/img/dress4.png'
import dress5 from '/src/img/dress5.png'
import dress6 from '/src/img/dress6.png'
import PortfolioItem from './PortfolioItem';
import Products from '../products';
const TITLE = 'Каталог | Insilicx inc.';

const Span = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    padding-bottom: 200px;
    
    width: 100%;

    .span {
        padding: 0 10% 0 10%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
        justify-content: center;
        justify-items: center;   
        grid-gap: 50px;
    }
    
    .content {
        margin-top: 40px;
        height: 330px;
        width: 215;
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

const Main = () => {
    const navigate = useNavigate();
  return (
    <Span>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <div className='span'>
            {Products.map((product) => (
                <PortfolioItem key={product.id} work={product} />
            ))}
        </div>

    </Span>
  )
}

export default Main;
//         {/* <div className='span'>
//             <div className='content'>
//                 <a href= '' onClick={()=>{navigate('/product',{state:{id:1,name:'Longsleeve “Slava nashim” black', cost: '6 499 ₽', photo: '/src/img/dress1.png'}})}}><img src={dress1} alt="" width="300" height="300"/></a>
//                     <h1>Longsleeve “Slava nashim” black
//                     <h2>6 499 ₽ </h2>
//                 </h1>
//             </div>

//             <div className='content'>
//             <a href='' onClick={()=>{navigate('/product',{state:{id:2,name:'Hoodie “Bloody title?44” black', cost: '4 500 ₽', photo: '/src/img/dress4.png'}})}}><img src={dress4} alt="" width="300" height="300"/></a>
//                     <h1>Hoodie “Bloody title?44” black 
//                     <h2>4 500 ₽</h2>
//                 </h1>
//             </div>

//             <div className='content'>
//             <a href= '' onClick={()=>{navigate('/product',{state:{id:3,name:'Hoodie “Chxse the sun” black', cost: '7 000 ₽', photo: '/src/img/dress2.png'}})}}><img src={dress2} alt="" width="300" height="300"/></a>
//                     <h1>Hoodie “Chxse the sun” black
//                     <h2>7 000 ₽ </h2>
//                 </h1>
//             </div>

//             <div className='content'>
//             <a href= '' onClick={()=>{navigate('/product',{state:{id:4,name:'Longsleeve “Tanikawai” black', cost: '5 299 ₽', photo: '/src/img/dress3.png'}})}}><img src={dress3} alt="" width="300" height="300"/></a>
//                     <h1>Longsleeve “Tanikawai” black
//                     <h2>5 299 ₽ </h2>
//                 </h1>
//             </div>

//             <div className='content'>
//             <a href='' onClick={()=>{navigate('/product',{state:{id:5,name:'Hoodie “the hate” black', cost: '3 500 ₽', photo: '/src/img/dress5.png'}})}}><img src={dress5} alt="" width="300" height="300"/></a>
//                     <h1>Hoodie “the hate” black
//                     <h2>3 500 ₽ </h2>
//                 </h1>
//             </div>

//             <div className='content'>
//             <a href='' onClick={()=>{navigate('/product',{state:{id:6,name:'Longsleeve “1’m tired” black', cost: '6 999 ₽', photo: '/src/img/dress6.png'}})}}><img src={dress6} alt="" width="300" height="300"/></a>
//                     <h1>Longsleeve “1’m tired” black
//                     <h2>6 999 ₽ </h2>
//                 </h1>
//             </div>
//         </div> */}
     