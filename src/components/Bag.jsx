import React from 'react'
import styled from 'styled-components'
import dress1 from '/src/img/dress1.png'
import close from '/src/img/close.svg'


const Main = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    * {
        font-family: "Noto Sans", sans-serif;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 3%;
    }
`

const OrderInfo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    .content {
        padding: 0 270px 0 270px;
        display: block;
        justify-content: center;
        justify-items: center;   
        grid-gap: 50px;
        width: 400px;
    }

    .content h1 {
        padding-bottom: 40px;
        font-family: "Noto Sans", sans-serif;
        font-size: 40px;
        font-weight: 500;
    }

    .close_img {
        position: absolute;
        margin-top: 6px;
        right: 66%;
    }
    
    .order_main {
        display: flex;
        padding-bottom: 15px;
    }

    .line hr {
        width: 380px;
        color: #D6D6D6;
        margin-left: 15px;
        margin-top: 5px;
        margin-bottom: 15px;
    }

    .line_short hr {
        width: 150px;
        color: #D6D6D6;
        margin-left: 35%;
    }

    .order_main h2 {
        font-family: "Noto Sans", sans-serif;
        padding-top: 3px;
        font-size: 12px;
        font-weight: lighter;
    }

    .order_main h3 {
        font-family: "Noto Sans", sans-serif;
        font-size: 15px;
        font-weight: 500;
        padding-top: 5px;
    }

    .order_main h4 {
        font-family: "Noto Sans", sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin-top: 45px;
    }

    .order_main p {
        padding-left: 10px;
        font-family: "Noto Sans", sans-serif;
        font-size: 16px;
        font-weight: 300;
    }

    .order_end h1 {
        font-family: "Noto Sans", sans-serif;
        font-size: 13px;
        font-weight: 400;
    }

    .order_end h2 {
        font-family: "Noto Sans", sans-serif;
        font-size: 13px;
        font-weight: 600;
    }
    .order_end h3 {
        font-family: "Noto Sans", sans-serif;
        font-size: 24px;
        font-weight: 700;
    }

    .items {
        display: flex;
        justify-content: space-between;
        margin-bottom: -10px;
    }

    .delivery {
        display: flex;
        justify-content: space-between;
        margin-bottom: -10px;
    }

    .total {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        margin-left: 19px;
    }
    .total h2 {
        font-family: "Noto Sans", sans-serif;
        font-size: 24px;
        font-weight: 500;
    }

    
`


const OrderInput = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    .input_mass {
        width: 580px;
        height: 100%;
    }

    .input_mass h1 {
        padding-bottom: 40px;
        font-family: "Noto Sans", sans-serif;
        font-size: 40px;
        font-weight: 500;
    }
    
`




const Bag = () => {
  return (
    <Main>
    <div className='grid'>
    <OrderInfo>
        <div className='content'>
            <h1>Корзина</h1>
            <div className='order_main'>
                <img src={dress1} alt="" width="86" height="85"/>
                <p>Longsleeve “Slava nashim” black<h2>Размер: XL</h2><h3>x 1</h3></p>
                <h4>4 500 ₽</h4>
                <img className='close_img' src={close} alt="" width="10" height="10"/>  
            </div>
            <div className='order_main'>
                <img src={dress1} alt="" width="86" height="85"/>
                <p>Longsleeve “Slava nashim” black<h2>Размер: XL</h2><h3>x 1</h3></p>
                <h4>4 500 ₽</h4>
                <img className='close_img' src={close} alt="" width="10" height="10"/>  
            </div>
            <div className='order_main'>
                <img src={dress1} alt="" width="86" height="85"/>
                <p>Longsleeve “Slava nashim” black<h2>Размер: XL</h2><h3>x 1</h3></p>
                <h4>4 500 ₽</h4>
                <img className='close_img' src={close} alt="" width="10" height="10"/>  
            </div>
            <div className='line'>
                    <hr></hr>
                </div>
            <div className='order_end'>
                <div className='items'>
                    <h1>Товары</h1>
                    <h2>4 500 ₽</h2>
                </div>
                <div className='line_short'>
                    <hr></hr>
                </div>
                <div className='delivery'>
                    <h1>Доставка</h1>
                    <h2>700 ₽</h2>
                </div>
                <div className='line_short'>
                    <hr></hr>
                </div>
                <div className='total'>
                    <h3>Итого</h3>
                    <h2>14 200₽</h2>
                </div> 
            </div>
        </div>
    </OrderInfo>
    <OrderInput>
        <div className='input_mass'>

            <h1>Оформление заказа</h1>
            <p>Адрес эл. почты</p>
            <input id='long' type='email' placeholder="example@zmail.ucoz.ru"></input>
            <p>Страна</p>
            <select className='country'>
                <option>Казахстан</option>
                <option selected>Россия</option>
                <option>Турникестан</option>
                <option>Саратов</option>
                <option>26 КАДР</option>
            </select>

        </div>
    </OrderInput>
</div>
</Main>
  )
}

export default Bag
