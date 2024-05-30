import React from 'react'
import styled from 'styled-components'
import vksvg from '../svg/vk.svg'
import telegramsvg from '../svg/telegram.svg'
import youtubesvg from '../svg/youtube.svg'

const FooterMain = styled.div`
    font-family: "Anonymous Pro", monospace;
    height: 230px;
    background-color: #0C0C0C;
    color: white;
    padding-left: 250px;
    padding-right: 250px;

    .footer-container {
        display: flex;
        justify-content: space-between;
        padding-top: 4vh;
    }

    .caption {
        font-size: 24px;
        color: rgba(255, 255, 255, 0.3);
    }

    a {
        text-decoration: none;
        color: white;
    }
`

const LogoLinks = styled.div`
    p {
        font-size: 20px;
        margin-top: 23px;
        color: rgba(255, 255, 255, 0.3);
    }

    .icons img {
        margin-right: 12px;
        margin-top: 27px;
    }
`

const ShopNav = styled.div`
    font-size: 18px;

    p {
        line-height: 35px;
    }
`

const InfoNav = styled.div`
    font-size: 18px;

    p {
        line-height: 35px;
    }
`

const BuisnessNav = styled.div`
    font-size: 16px;

    p {
        font-size: 15px;
        color: rgba(255, 255, 255, 0.3);
        margin-top: 5px;
        /* line-height: 9px; */
    }

    h3 {
        font-size: 20px;
        margin-top: 15px;
    }
`

const Footer = () => {
  return (
    <FooterMain>
        <div className='footer-container'>
            <LogoLinks>
                <h1>Insilicx inc.</h1>
                <div className='icons'>
                    <a href='#'><img src={vksvg} width={30} height={30}/></a>
                    <a href='#'><img src={telegramsvg} width={30} height={30}/></a>
                    <a href='#'><img src={youtubesvg} width={30} height={30}/></a>
                </div>
                <p>© 2024 Insilicx inc.</p>
            </LogoLinks>
            <ShopNav>
                <p className='caption'>МАГАЗИН</p>
                <p><a href='/'>Каталог</a></p>
                <p><a href='#'>И так далее</a></p>
            </ShopNav>
            <InfoNav>
                <p className='caption'>ИНФОРМАЦИЯ</p>
                <p><a href='#'>Доставка и оплата</a></p>
                <p><a href='#'>Публичная оферта</a></p>
                <p><a href='#'>Контакты</a></p>
            </InfoNav>
            <BuisnessNav>
                <p>ИП: Захаров Михаил Дмитриевич</p>
                <p>ИНН: 744410767676</p>
                <p>ОГРНИП: 317745600008299</p>
                <h3>shop@insilicx.ru</h3>
            </BuisnessNav>            
        </div>
    </FooterMain>
  )
}

export default Footer
