import dress1 from "/src/img/dress1.png";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Form, useLoaderData } from "react-router-dom";
import products from "../products";
import Error404 from "../components/Error404";
import NotAvailable from "../components/NotAvalibale";

const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

  /* .product .info #error {
        display: none;
        color: red;
        font-size: 20px;
        font-weight: 400;
    } */
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
`;

const Buttons = styled.div`
    .decision {
        height: 45px;
        margin-top: 8px;
        margin-bottom: 10px;
    }

    input[name="size"] {
        -webkit-appearance: none;
        appearance: none;
        /* position: absolute; */
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
    <div className="main">
      <Main>
        <div className="product">
          {/* тут картинка товара */}
          <img src={project.screenshot} alt="" width="540" height="560" />
          <div className="info">
            {/* вывод цены и товара */}
            <p>{project.title}</p>
            <h1>{project.cost} ₽</h1>
            {/* снизу кнопки размера */}
            <Buttons>
              <div className="decision">
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="L"
                    checked={selectedSize === "L"}
                    onClick={() => handleSizeSelect("L")}
                  />
                  L
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="XL"
                    checked={selectedSize === "XL"}
                    onClick={() => handleSizeSelect("XL")}
                  />
                  XL
                </label>
              </div>
            </Buttons>
            {/* тут вывод сообщеня */}
            <h1 id="message">{message}</h1>
            {/* тут кнопка корзины */}
            <div className="button">
              <button onClick={addToCart} className="addCart">
                Добавить в корзину
              </button>
            </div>
            {/* тут описание товара */}
            <h2>{project.description}</h2>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default ProductPageMain;
