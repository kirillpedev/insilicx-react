import React from 'react'
import styled from 'styled-components'
import vksvg from '../svg/vk.svg'
import telegramsvg from '../svg/telegram.svg'
import youtubesvg from '../svg/youtube.svg'

const FooterMain = styled.div`
    font-family: "Anonymous Pro", monospace;
    height: 100%;
    background-color: #0C0C0C;
    color: white;
    padding: 0 15% 0 15%;

`
const Footer_container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding-top: 3vh;
    padding-bottom: 4vh;
`
const LogoLinks = styled.div`
    margin-top: 20px;



    @media (max-width: 874px) {
      text-align: center;
      margin-bottom: 35px;
    }
`

const ShopNav = styled.div`
    font-size: 18px;
    margin-top: 20px;
    line-height: 35px;

    @media (max-width: 874px) {
      text-align: center;
      margin-bottom: 35px;
    }
`

const InfoNav = styled.div`
    font-size: 18px;
    margin-top: 20px;
    line-height: 35px;

    @media (max-width: 874px) {
      text-align: center;
      margin-bottom: 35px;
    }
`

const BuisnessNav = styled.div`
    font-size: 16px;
    margin-top: 20px;

    @media (max-width: 874px) {
      text-align: center;
      margin-bottom: 35px;
    }
`

const H1 = styled.h1`
    
`

const Icons = styled.div`
    
`
const Image = styled.a`
    text-decoration: none;
    color: white;
`
const Image_1 = styled.img`
    margin-right: 12px;
    margin-top: 27px;
`
const LogoLinksP = styled.p`
    font-size: 20px;
    margin-top: 23px;
    color: rgba(255, 255, 255, 0.3);
`
const TextShop = styled.p`
     font-size: 24px;
     color: rgba(255, 255, 255, 0.3);
`
const TextShop_1 = styled.p`
    
`

const LogoLinksA = styled.a`
     text-decoration: none;
     color: white;
`
const BuisnessNavP = styled.p`
    font-size: 15px;
    color: rgba(255, 255, 255, 0.3);
    margin-top: 5px;
`
const BuisnessNavH3 = styled.h3`
    font-size: 20px;
    margin-top: 15px;
`
const Footer = () => {
  return (
    <FooterMain>
      <Footer_container>
            <LogoLinks>
                <H1>Insilicx inc.</H1>
                <Icons>
                    <Image href='#'><Image_1 src={vksvg} width={30} height={30}/></Image>
                    <Image href='#'><Image_1 src={telegramsvg} width={30} height={30}/></Image>
                    <Image href='#'><Image_1 src={youtubesvg} width={30} height={30}/></Image>
                </Icons>
                <LogoLinksP>© 2024 Insilicx inc.</LogoLinksP>
            </LogoLinks>
            <ShopNav>
                <TextShop>МАГАЗИН</TextShop>
                <TextShop_1><LogoLinksA href='/'>Каталог</LogoLinksA></TextShop_1>
                <TextShop_1><LogoLinksA href='#'>И так далее</LogoLinksA></TextShop_1>
            </ShopNav>
            <InfoNav>
                <TextShop>ИНФОРМАЦИЯ</TextShop>
                <TextShop_1><LogoLinksA href='#'>Доставка и оплата</LogoLinksA></TextShop_1>
                <TextShop_1><LogoLinksA href='#'>Публичная оферта</LogoLinksA></TextShop_1>
                <TextShop_1><LogoLinksA href='#'>Контакты</LogoLinksA></TextShop_1>
            </InfoNav>
            <BuisnessNav>
                <BuisnessNavP>ИП: Захаров Михаил Дмитриевич</BuisnessNavP>
                <BuisnessNavP>ИНН: 744410767676</BuisnessNavP>
                <BuisnessNavP>ОГРНИП: 317745600008299</BuisnessNavP>
                <BuisnessNavH3>shop@insilicx.ru</BuisnessNavH3>
            </BuisnessNav>            
        </Footer_container>
    </FooterMain>
  )
}

export default Footer
