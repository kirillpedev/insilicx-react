import React from 'react'
import styled from 'styled-components'
import dress1 from '/src/img/dress1.png'
import close from '/src/img/close.svg'
import check from '../svg/check.svg'


const Main = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    font-family: "Noto Sans", sans-serif;

    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 3%;
`

const OrderInfo = styled.div`
    padding: 0 270px 0 270px;
    display: block;
    justify-content: center;
    justify-items: center;   
    grid-gap: 50px;
    width: 400px;

    .content h1 {
        margin-bottom: 40px;
    }

    .close_img {
        
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

    width: 700px;
    height: 100%;

    div {
        margin-top: 9px;
    }
`

const Headline = styled.h1`
    padding-bottom: 40px;
    font-family: "Noto Sans", sans-serif;
`

const Pg = styled.div`
    font-size: 16px; 
    margin-bottom: 5px;
`
const Select = styled.select`
    width: 100%;
    border: 1px solid #C5C5C5;
    padding: 9px 0px 9px ;
    text-indent: 15px; 
`

const InputLong = styled.input`
    padding: 11px 0px 11px;
    width: 100%; 
    text-indent: 15px; 
    border: 1px solid #C5C5C5;
`

const InputShort = styled.input`
    padding: 11px 0px 11px ;
    width: 100%; 
    text-indent: 15px; 
    border: 1px solid #C5C5C5;
`

//Пустотелые лохи
const Option = styled.option`
    
`

const SpanFirst = styled.span`
    
`
const SelectInput = styled.div`

`

const UserInput = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
`

const SpanSecond = styled.span`
    padding-left: 15px;
`

const RadioDecision = styled.div`
    width: 100%;
    height: 48px;
    position: relative;
`

const OrderButton = styled.button`
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

    &:hover {
        color: #000000;
        background-color: #ffffff;
        transition: 0.1s ease;
    }
`

const LicenseInput = styled.div`
    width: 100%;
    height: 20px;
    position: relative;
`

const RDLabel = styled.label`
    cursor: pointer;
    position: absolute;
    top: 16px;
    left: 38px;
    color: black;
`

const LILabel = styled.label`
    position: absolute;
    left: 30px;
    top: -1px;
`

const RDPg = styled.p`
    cursor: pointer;
    position: absolute;
    font-weight: 600;
    font-size: 15px;
    top: 15px;
    right: 10px;
    color: black;
`

const DeliveryInput = styled.input`
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    height: 100%;
    width: 100%;
    border: 1px solid #C5C5C5;

    &::before {
        content: "";
        position: absolute;
        height: 16px;
        width: 16px;
        border: 1px solid #C5C5C5;
        border-radius: 50%;
        top: 15px;
        left: 10px;
    }

    &::after {
        content: "";
        position: absolute;
        background-color: transparent;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        top: 19px;
        left: 14px;
    }

    &:checked {
        border: 2px solid black;
    }

    &:checked:after {
        background-color: black; 
    }
`

const LicInput = styled.input`
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    height: 20px;
    width: 20px;
    border: 1px solid black;
    cursor: pointer;

    &:checked {
        content: "";
        background: url(${check}) no-repeat;
        background-size: 19px 19px;
        background-color: black;
        position: absolute;
        width: 20px;
        height: 20px;
        transition: 0.1s ease-in-out;
    }
`

//Начинается игар я открываю див смерти
const OrderMain = styled.div`
    display: flex;
    padding-bottom: 15px;
    position: relative;
`

const ItemImage = styled.img`
    width: 86px;
    height: 85px;
`
const CloseImage = styled.img`
    position: absolute;
    margin-top: 6px;
    right: 0;
`

const ItemPg = styled.p`
    padding-left: 10px;
    font-family: "Noto Sans", sans-serif;
    font-size: 16px;
    font-weight: 300;
`

const HeadlineCoast = styled.h1`
    margin-bottom: 16px;
    font-family: "Noto Sans", sans-serif;
    font-size: 13px;
    font-weight: 500;
`
const CoastH2 = styled.h2`
    font-family: "Noto Sans", sans-serif;
    font-size: 24px;
    font-weight: 600;
`

const ItemCoast = styled.h2`
    font-family: "Noto Sans", sans-serif;
    font-size: 17px;
    font-weight: 500;
    margin-top: 45px;
`

const ItemSize = styled.h2`
    font-family: "Noto Sans", sans-serif;
    padding-top: 3px;
    font-size: 12px;
    font-weight: 300;
`

const ItemCount = styled.h3`
    font-family: "Noto Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding-top: 5px;
`

const Nekoe = styled.div`
    display: flex;
    justify-content: space-between;
`

const Line = styled.hr`
    width: 100%;
    border: 1px solid #D6D6D6;
    margin-bottom: 18px;
`

const Bag = () => {
  return (
    <Main>

    <OrderInfo>
            <Headline>Корзина</Headline>
            <OrderMain>
                <ItemImage src={dress1} alt=""/>
                <ItemPg>Longsleeve “Slava nashim” black<ItemSize>Размер: XL</ItemSize><ItemCount>x 1</ItemCount></ItemPg>
                <ItemCoast>4 500 ₽</ItemCoast>
                <CloseImage className='close_img' src={close} alt="" width="10" height="10"/>  
            </OrderMain>
            <OrderMain>
                <ItemImage src={dress1} alt=""/>
                <ItemPg>Longsleeve “Slava nashim” black<ItemSize>Размер: XL</ItemSize><ItemCount>x 1</ItemCount></ItemPg>
                <ItemCoast>4 500 ₽</ItemCoast>
                <CloseImage className='close_img' src={close} alt="" width="10" height="10"/>  
            </OrderMain>
            <OrderMain>
                <ItemImage src={dress1} alt=""/>
                <ItemPg>Longsleeve “Slava nashim” black<ItemSize>Размер: XL</ItemSize><ItemCount>x 1</ItemCount></ItemPg>
                <ItemCoast>4 500 ₽</ItemCoast>
                <CloseImage className='close_img' src={close} alt="" width="10" height="10"/>  
            </OrderMain>
            <Line/>
            <Nekoe>
                <HeadlineCoast>Товары</HeadlineCoast>
                <HeadlineCoast>4 500 ₽</HeadlineCoast>
            </Nekoe>
            <Nekoe>
                <HeadlineCoast>Доставка</HeadlineCoast>
                <HeadlineCoast>700 ₽</HeadlineCoast>
            </Nekoe>
            <Nekoe>
                <CoastH2>Итого</CoastH2>
                <CoastH2>14 200₽</CoastH2>
            </Nekoe> 
    </OrderInfo>

    <OrderInput>
        <Headline>Оформление заказа</Headline>
            <Pg>Адрес эл. почты</Pg>
            <InputLong type='email' placeholder="example@zmail.ucoz.ru"></InputLong>
            <Pg>Страна</Pg>
            <Select>
                <Option>Казахстан</Option>
                <Option selected>Россия</Option>
                <Option>Турникестан</Option>
                <Option>Саратов</Option>
                <Option>26 КАДР</Option>
            </Select>
            <UserInput>
                <SpanFirst>
                    <Pg>ФИО (Укажите полностью фамилию и имя)</Pg>
                    <InputLong type='email' placeholder="Прототипов Данька Ведьмакович"></InputLong>
                </SpanFirst>
                <SpanSecond>
                    <Pg>Номер</Pg>
                    <InputShort type='email' placeholder="+79053336677"></InputShort>
                </SpanSecond>
            </UserInput>
            <Pg>Способ доставки:</Pg>
            <RadioDecision>
                <DeliveryInput id="d_rus" type="radio" name="delivery_type"/>
                <RDLabel for="d_rus">Доставка по Российской Федерации</RDLabel>
                <RDPg>400 ₽</RDPg>
            </RadioDecision>
            <RadioDecision>
                <DeliveryInput id="d_cis" type="radio" name="delivery_type"/>
                <RDLabel for="d_cis">Доставка в Беларусь и Казахстан</RDLabel>
                <RDPg>700 ₽</RDPg>
            </RadioDecision>
            <RadioDecision>
                <DeliveryInput id="d_world" type="radio" name="delivery_type"/>
                <RDLabel for="d_world">Доставка в другие страны (кроме Украины)</RDLabel>
                <RDPg>от 1700 ₽</RDPg>
            </RadioDecision>
            <Pg>Адрес</Pg>
            <InputLong type='email' placeholder="ул. Приколюхина, д7"></InputLong>
            <UserInput>
                <SpanFirst>
                    <InputLong type='email' placeholder="Город"></InputLong>
                </SpanFirst>
                <SpanSecond>
                    <InputShort type='email' placeholder="Почтовый индекс"></InputShort>
                </SpanSecond>
            </UserInput>
            <SelectInput>
                <Select>
                    <Option>Москва</Option>
                    <Option selected>Московская обл.</Option>
                    <Option>Саратовская обл.</Option>
                    <Option>26-кадровская обл.</Option>
                    <Option>Турникистанский край</Option>
             </Select>
            </SelectInput>
            <LicenseInput>
                <LicInput id="lic" type="checkbox" name="license_type"/>
                <LILabel for="lic">Согласен с <a href='#'>публичной офертой</a></LILabel>
            </LicenseInput>
            <OrderButton>Скачать вирус</OrderButton>
    </OrderInput>

</Main>
  )
}

export default Bag
