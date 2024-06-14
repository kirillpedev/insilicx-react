import dress1 from "/src/img/dress1.png";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Form, useLoaderData } from "react-router-dom";
import products from "../products";
import Error404 from "../components/Error404";
import NotAvailable from "../components/NotAvalibale";
import {Animated} from "react-animated-css";
const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");
`;

const Buttons = styled.div`

`
const Product = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    margin-bottom: 150px;
    width: 1200px;
`


const ProductImg = styled.img`
 margin-right: 15%;
`
const ProductInfo = styled.div`
  display: block;
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
`
const ProductInfoP = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 32px;
  font-weight: 300;
`
const ProductInfoH1 = styled.h1`
  
`
const ProductInfoH2 = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
  font-weight: normal;
  margin-top: 15px;
`
const Decision = styled.div`
  height: 45px;
  margin-top: 8px;
  margin-bottom: 10px;
`
const Decision_Label = styled.label`
  
`
const Decision_Input = styled.input`
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    height: 45px;
    width: 45px;
    border: 3px solid black;
    cursor: pointer;
    &[id="l"]::before {
        content: "L";
        position: absolute;
        height: 30px;
        width: 30px;
        color: black;
        font-size: 24px;
        font-weight: 500;
        left: 13px;
        top: 6px;
    }
    &[id="xl"]::before {
        content: "XL";
        position: absolute;
        height: 30px;
        width: 30px;
        color: black;
        font-size: 24px;
        font-weight: 500;
        left: 5px;
        top: 6px;
    }

    &[name="size"]:checked {
        background-color: black;
        transition: 0.05s ease-out;
    }

    &[name="size"]:checked::before {
        color: white;
        transition: 0.05s ease-out;
    }
    &[id="xl"] {
        margin-left: 55px;
    }
    
`
const Button = styled.button`
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
    transition: 0.2s ease;
  }
`
const ProductPageMain = () => {

  const { id } = useLoaderData();
  const project = products.find((product) => product.id === id);
  if (!project) {
    return <Error404 />;
  }
  // если недоступен, то выводим компонент для недоступных айтемов
  else if (!project.available) {
    return <NotAvailable />;
  }

  // состояния размера и сообщения
  const [selectedSize, setSelectedSize] = useState(null);
  const [message, setMessage] = useState("");

  // Обработчик выбора размера
  const handleSizeSelect = (size) => {
    if (selectedSize === size) {
      // если уже выбран размер, то снимаем с него выбор при повторном нажатии на инпут
      setSelectedSize(null);
      setMessage(`Размер ${size} отменен`);
    } else {
      // устанавливаем выбранный размер иначе
      setSelectedSize(size);
      setMessage(`Выбран размер: ${size}`);
    }
  };

  // добавление в корзину
  const addToCart = () => {
    if (!selectedSize) {
      // если размер не выбрали, то выводим сообщение о необходимости выбора, добавила просто для наглядности этот обработчик, можно изменить
      setMessage("Выберите размер");
    } else {
      setMessage(`Размер: ${selectedSize} добавлен в корзину`);
    }
  };

  // верстка возвращаетмся
  return (
      <Main>
        <Animated animationIn="fadeIn" animationInDuration='500'  isVisible={true}>
        <Product>
          {/* тут картинка товара */}
          <ProductImg src={project.screenshot} alt="" width="540" height="560" />
          <ProductInfo>
            {/* вывод цены и товара */}
            <ProductInfoP>{project.title}</ProductInfoP>
            <Animated animationIn="shake" animationInDuration='1500' animationInDelay='700' isVisible={true}>
              <ProductInfoH1>{project.cost} ₽</ProductInfoH1>
            </Animated>
            {/* снизу кнопки размера */}
            <Buttons>
              <Decision>
                <Decision_Label>
                  <Decision_Input
                    type="radio"
                    id="l"
                    name="size"
                    value="L"
                    checked={selectedSize === "L"}
                    onClick={() => handleSizeSelect("L")}
                  />
                </Decision_Label>
                <Decision_Label>
                  <Decision_Input
                    type="radio"
                    name="size"
                    id="xl"
                    value="XL"
                    checked={selectedSize === "XL"}
                    onClick={() => handleSizeSelect("XL")}
                  />
                </Decision_Label>
              </Decision>
            </Buttons>
            {/* тут вывод сообщеня */}
            <ProductInfoH1>{message}</ProductInfoH1>
            {/* тут кнопка корзины */}
            <Button onClick={addToCart} className="addCart">
                Добавить в корзину
            </Button>
            {/* тут описание товара */}
            <ProductInfoH2>{project.description}</ProductInfoH2>
          </ProductInfo>
        </Product>
        </Animated>
      </Main>
  );
};

export default ProductPageMain;
