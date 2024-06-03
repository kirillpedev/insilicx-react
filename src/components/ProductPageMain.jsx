import dress1 from '/src/img/dress1.png'
import React from 'react'
import styled from 'styled-components'
import { Form, useLoaderData } from "react-router-dom";
import products from '../products';

const Main = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

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
        width: 40px;
        height: 40px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-family: "Noto Sans", sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #000;
        background-color: #ffff;
    }

    .decision :hover {


        box-shadow: 0 6px 6px 0 rgba(0,0,0,0.24), 0 6px 5px 0 rgba(0,0,0,0.19);
        background-color: #000;
        color: #ffff;
        transition: 0.2s ease;
    }
    .decision :focus {
        background-color: #000;
        color: #ffff;
   }
   .decision :active {
    background-color: #000;
    color: #ffff;
   }

`

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

const ProductPageMain = () => {
    const { id } = useLoaderData();
    const project = products.find(product => product.id === id);
  return (
        <div className='main'>
            <Main>
                <div className='product'>
                    <img src={project.screenshot} alt="" width="540" height="560"/>
                    <div className='info'>
                        <p>{project.title}</p>
                        <h1>{project.cost}</h1>
                        <Buttons>
                            <div className='decision'>
                                <button>L</button>
                                <button>XL</button>
                            </div>
                        </Buttons>
                        <div className='button'>
                            <button>В корзину</button>
                        </div>
                        <h2>{project.description}</h2>
                    </div>
                </div>
            </Main>
        </div>
    
  )
}
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

export default ProductPageMain
