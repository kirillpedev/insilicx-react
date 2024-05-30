import React from 'react'
import styled from 'styled-components'
import dress0 from '/src/img/dress0.svg'
import dress1 from '/src/img/dress1.svg'
import dress2 from '/src/img/dress2.svg'
import dress3 from '/src/img/dress3.svg'
import dress4 from '/src/img/dress4.svg'
import dress5 from '/src/img/dress5.svg'


const Span = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    .span {
        padding: 0 270px 0 270px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        justify-items: center;   
    }
    
    .content {
        margin-top: 50px;
        height: 330px;
        width: 215;
    }
    .content h1 {
        margin-top: 20px;
        font-family: "Noto Sans", sans-serif;
        font-size: 25px;
        font-weight: 200;
    }
    .content h2 {
        font-family: "Noto Sans", sans-serif;
        font-size: 30px;
        font-weight: 800;
    }

`

const Main = () => {
  return (
    <Span>
        <div className='span'>
            <div className='content'>
                <a href=''><img src={dress0} alt="" width="305" height="255"/></a>
                    <h1>Longsleeve “Slava nashim” black
                    <h2>6 499 ₽ </h2>
                </h1>
            </div>

            <div className='content'>
            <a href=''><img src={dress1} alt="" width="305" height="255"/></a>
                    <h1>Hoodie “Bloody title?44” black 
                    <h2>4 500 ₽</h2>
                </h1>
            </div>

            <div className='content'>
            <a href=''><img src={dress2} alt="" width="305" height="255"/></a>
                    <h1>Hoodie “Chxse the sun” black
                    <h2>7 000 ₽ </h2>
                </h1>
            </div>

            <div className='content'>
            <a href=''><img src={dress3} alt="" width="305" height="255"/></a>
                    <h1>Longsleeve “Tanikawai” black
                    <h2>5 299 ₽ </h2>
                </h1>
            </div>

            <div className='content'>
            <a href=''><img src={dress4} alt="" width="305" height="255"/></a>
                    <h1>Hoodie “the hate” black
                    <h2>3 500 ₽ </h2>
                </h1>
            </div>

            <div className='content'>
            <a href=''><img src={dress5} alt="" width="305" height="255"/></a>
                    <h1>Longsleeve “1’m tired” black
                    <h2>6 999 ₽ </h2>
                </h1>
            </div>
        </div>
    </Span>
  )
}

export default Main
