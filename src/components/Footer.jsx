import React from 'react'
import styled from 'styled-components'

const FooterMain = styled.div`
    font-family: "Anonymous Pro", monospace;
    margin-top: 40px; 
    height: 230px;
    background-color: #0C0C0C;
    color: white;
    padding-left: 250px;
    padding-right: 250px;
`

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='footer-container'>
            <div className='logo-links'>
                <h1>Insilicx inc.</h1>
                <div className='icons'>
                    <img src="" width={30} height={30}/>
                    <img src="" width={30} height={30}/>
                    <img src="" width={30} height={30}/>
                </div>
                <p>© 2024 Insilicx inc.</p>
            </div>
            <div className='shop-nav'>
                <p className='caption'>МАГАЗИН</p>
                <p>Каталог</p>
                <p>И так далее</p>
            </div>
            <div className='info-nav'>
                <p className='caption'>ИНФОРМАЦИЯ</p>
                <p>Доставка и оплата</p>
                <p>Публичная оферта</p>
                <p>Контакты</p>
            </div>
            <div className='buisness-nav'>
                <p>ИП: Захаров Михаил Дмитриевич</p>
                <p>ИНН: 744410767676</p>
                <p>ОГРНИП: 317745600008299</p>
                <h3>shop@insilicx.ru</h3>
            </div>            
            </div>
    </div>
  )
}

export default Footer
