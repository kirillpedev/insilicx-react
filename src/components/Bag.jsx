import React from 'react'
import styled from 'styled-components'
import dress1 from '/src/img/dress1.png'
import close from '/src/img/close.svg'


const Main = styled.div`
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
        padding-left: 20px;
        padding-bottom: 40px;
        font-family: "Noto Sans", sans-serif;
        font-size: 32px;
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

    .input_mass  {
        display: block;
    }

    .input_mass p  {
        font-size: 32px;
        font-family: "Noto Sans", sans-serif;
        font-weight: 500;
        margin-bottom: 2%;
    }

    .input_mass h1  {
        font-size: 16px;
        font-family: "Noto Sans", sans-serif;
        font-weight: 300;
        margin-bottom: 6px;
        margin-top: 7px;
    }

    .input_mass input {
        width: 570px;
        height: 30px;
        border-color: #D6D6D6;
        border-style: solid;
        border-radius: 2px;
        padding-left: 10px;
    }

    .input_mass select {
        width: 588px;
        height: 35px;
        border-color: #D6D6D6;
        border-style: solid;
    }

    .input_mass #short {
        width: 332px;
        height: 35px;
        border-color: #D6D6D6;
        border-style: solid;
    }

    .input_mass #shorter {
        margin-left: 6px;
        width: 218px;
        height: 35px;
        border-color: #D6D6D6;
        border-style: solid;
    }

    .input_mass #text_margin {
        margin-top: 40px;
    }

    .radio_decision {
        border: 2px solid;
        border-color: #D6D6D6;
        width: 580px;
        height: 45px;
        margin-bottom: 5px;
        border-radius: 2px;
    }

    .input_mass ::placeholder{
        padding-left: 10px;
        color: #B3B3B3;
    }

    .input_mass #radio{
        margin-left: -270px;
        margin-top: 8px;
        transform:scale(0.7);
        accent-color: black;
    }

    .input_mass #transparent {
        display: flex;
        font-size: 12px;
        position: absolute;
        font-family: "Noto Sans", sans-serif;
        font-weight: 300;
        color: #B3B3B3;
        margin-left: 50px;
        margin-top: 14px;
    }

    .input_mass h5 {
        color: #fff;
    }

    .input_mass #town{
        margin-top: 14px;
    }

    .input_mass button {
        margin-top: 20px;
        width: 235px;
        height: 40px;
        border-radius: 2px;
        background-color: black;
        color: white;
        margin-bottom: 20%;
        font-family: "Noto Sans", sans-serif;
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: bold;
        cursor: pointer;
        border: none;
    }

    .btn :hover {
        /* box-shadow: 0 6px 6px 0 rgba(0,0,0,0.24), 0 6px 5px 0 rgba(0,0,0,0.19); */
        background-color: #ffff;
        font-size: 18px;
        color: #000;
        transition: 0.2s ease;
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
            <p>Оформление заказа</p>
            <h1>Адрес эл. почты</h1>
            <input id='long' type='email' placeholder="example@zmail.ucoz.ru"></input>
            <h1>Страна</h1>
            <select className='country'>
                <option>Казахстан</option>
                <option selected>Россия</option>
                <option>Турникестан</option>
                <option>Саратов</option>
                <option>26 КАДР</option>
            </select>
            <h1>ФИО (Укажаите полностью фамилию и имя) и Номер телефона</h1>
            <input id='short' type='text' placeholder="Китайкин Данька Прототипович"></input>
            <input id='shorter' type='text' placeholder="+79056666666"></input>
            <h1 id='text_margin'>Способ доставки:</h1>
                <div className='radio_decision'>
                    <h3 id='transparent'>Доставка по Российской Федерации </h3>
                        <input id='radio' type='radio'></input>
                </div>
                <div className='radio_decision'>
                    <h3 id='transparent'>Доставка в Беларусь и Казахстан </h3>
                        <input id='radio' type='radio'></input>
                </div>
                <div className='radio_decision'>
                    <h3 id='transparent'>Доставка в другие страны (кроме Украины) </h3>
                        <input id='radio' type='radio'></input>
                </div>
                <h1>Адрес</h1>
                <input id='long' type='text' placeholder="ул. Приколюхина, д7"></input>
                <h5>.</h5>
                <input id='short' type='text' placeholder="Город"></input>
                <input id='shorter' type='text' placeholder="Почтовый индекс"></input>
            <select id='town'>
                    <option>Саратов</option>
                    <option selected>Москва</option>
                    <option>Санкт-Солебург</option>
                    <option>Пушкино(Чушкино)</option>
                    <option>Говорово</option>
            </select>
            <div className='btn'>
                <button>Оформить заказ</button>
            </div>
                
        </div>
    </OrderInput>
</div>
</Main>
  )
}

export default Bag
