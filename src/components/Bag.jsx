import React from 'react'
import styled from 'styled-components'
import dress1 from '/src/img/dress1.png'
import close from '/src/img/close.svg'
import check from '../svg/check.svg'


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
        margin-bottom: 40px;
    }

    .close_img {
        position: absolute;
        margin-top: 6px;
        right: 0;
    }
    
    .order_main {
        display: flex;
        padding-bottom: 15px;
        position: relative;
    }

    .line hr {
        width: 100%;
        border: 1px solid #D6D6D6;
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
        font-weight: 300;
    }

    .order_main h3 {
        font-family: "Noto Sans", sans-serif;
        font-size: 15px;
        font-weight: 400;
        padding-top: 5px;
    }

    .order_main h4 {
        font-family: "Noto Sans", sans-serif;
        font-size: 17px;
        font-weight: 500;
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
        font-weight: 600;
    }

    .items {
        display: flex;
        justify-content: space-between;
    }

    .items h1 {
        margin-bottom: 16px;
    }

    .delivery h1 {
        margin-bottom: 16px;
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
    }
    .total h2 {
        font-family: "Noto Sans", sans-serif;
        font-size: 24px;
        font-weight: 600;
    }

    
`


const OrderInput = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    .input_mass {
        width: 700px;
        height: 100%;
    }

    h1 {
        margin-bottom: 10px;
    }

    .input_mass p {
        font-size: 14px; 
        margin-bottom: 5px;
    }

    .country {
        width: 100%;
        border: 1px solid #C5C5C5;
        padding: 7px 0px 7px ;
        text-indent: 15px; 
    }

    .input_mass div {
        margin-top: 14px;
    }

    .input_mass #long {
        padding: 9px 0px 9px;
        width: 100%; 
        text-indent: 15px; 
        border: 1px solid #C5C5C5;
    }

    .input_mass #short {
        padding: 9px 0px 9px ;
        width: 100%; 
        text-indent: 15px; 
        border: 1px solid #C5C5C5;
    }

    .phone {
        padding-left: 15px;
    }

    .index {
        padding-left: 15px;
    }

    .input_mass h1 {
        padding-bottom: 40px;
        font-family: "Noto Sans", sans-serif;
        font-size: 40px;
        font-weight: 500;
    }

    .user_input {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
    }

    .radio_decision {
        width: 100%;
        height: 48px;
        position: relative;
    }

    input[name="delivery_type"] {
        -webkit-appearance: none;
        appearance: none;
        position: absolute;
        height: 100%;
        width: 100%;
        border: 1px solid #C5C5C5;
    }

    input[name="delivery_type"]::before {
        content: "";
        position: absolute;
        height: 16px;
        width: 16px;
        border: 1px solid #C5C5C5;
        border-radius: 50%;
        top: 15px;
        left: 10px;
    }

    input[name="delivery_type"]::after {
        content: "";
        position: absolute;
        background-color: transparent;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        top: 19px;
        left: 14px;
    }

    input[name="delivery_type"]:checked {
        border: 2px solid black;
    }

    input[name="delivery_type"]:checked:after {
        background-color: black; 
    }

    .radio_decision label {
        cursor: pointer;
        position: absolute;
        top: 13px;
        left: 38px;
        color: black;
    }

    .radio_decision p {
        cursor: pointer;
        position: absolute;
        font-weight: 600;
        font-size: 15px;
        top: 15px;
        right: 10px;
        color: black;
    }

    .license_input {
        width: 100%;
        height: 20px;
        position: relative;
    }

    .license_input label {
        position: absolute;
        left: 30px;
        top: -1px;
    }

    input[name="license_type"] {
        -webkit-appearance: none;
        appearance: none;
        position: absolute;
        height: 20px;
        width: 20px;
        border: 1px solid black;
        cursor: pointer;
    }

    input[name="license_type"]:checked {
        content: "";
        background: url(${check}) no-repeat;
        background-size: 19px 19px;
        background-color: black;
        position: absolute;
        width: 20px;
        height: 20px;
        transition: 0.1s ease-in-out;
    }
    
    .button .order {
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

    .button .order:hover {
        color: #000000;
        background-color: #ffffff;
        transition: 0.1s ease;
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
                <div className='delivery'>
                    <h1>Доставка</h1>
                    <h2>700 ₽</h2>
                </div>
                <div className='total'>
                    <h3>Итого</h3>
                    <h2>14 200₽</h2>
                </div> 
            </div>
        </div>
    </OrderInfo>
    <OrderInput>
        <h1>Оформление заказа</h1>
        <div className='input_mass'>

            <div className='email_input'>
                <p>Адрес эл. почты</p>
                <input id='long' type='email' placeholder="example@zmail.ucoz.ru"></input>
            </div>

            <div className='country_input'>
                <p>Страна</p>
                <select className='country'>
                    <option>Казахстан</option>
                    <option selected>Россия</option>
                    <option>Турникестан</option>
                    <option>Саратов</option>
                    <option>26 КАДР</option>
                </select>
            </div>
            
            <div className='user_input'>
                <span className='name'>
                    <p>ФИО (Укажите полностью фамилию и имя)</p>
                    <input id='long' type='email' placeholder="Прототипов Данька Ведьмакович"></input>
                </span>
                <span className='phone'>
                    <p>Номер</p>
                    <input id='short' type='email' placeholder="+79053336677"></input>
                </span>
            </div>

            <div className='delivery_input'>
                <p>Способ доставки:</p>
                <div for="d_rus" className='radio_decision'>
                    <input id="d_rus" type="radio" name="delivery_type"/>
                    <label for="d_rus">Доставка по Российской Федерации</label>
                    <p>400 ₽</p>
                </div>
                <div className='radio_decision'>
                    <input id="d_cis" type="radio" name="delivery_type"/>
                    <label for="d_cis">Доставка в Беларусь и Казахстан</label>
                    <p>700 ₽</p>
                </div>
                <div className='radio_decision'>
                    <input id="d_world" type="radio" name="delivery_type"/>
                    <label for="d_world">Доставка в другие страны (кроме Украины)</label>
                    <p>от 1700 ₽</p>
                </div>
            </div>

            <div className='email_input'>
                <p>Адрес</p>
                <input id='long' type='email' placeholder="ул. Приколюхина, д7"></input>
            </div>

            <div className='user_input'>
                <span className='city'>
                    <input id='long' type='email' placeholder="Город"></input>
                </span>
                <span className='index'>
                    <input id='short' type='email' placeholder="Почтовый индекс"></input>
                </span>
            </div>

            <div className='country_input'>
                <select className='country'>
                    <option>Москва</option>
                    <option selected>Московская обл.</option>
                    <option>Саратовская обл.</option>
                    <option>26-кадровская обл.</option>
                    <option>Турникистанский край</option>
                </select>
            </div>

            <div className='license_input'>
                <input id="lic" type="checkbox" name="license_type"/>
                <label for="lic">Согласен с <a href='#'>публичной офертой</a></label>
            </div>

            <div className='button'>
                <button className='order'>Скачать вирус</button>
            </div>

        </div>
    </OrderInput>
</div>
</Main>
  )
}

export default Bag
