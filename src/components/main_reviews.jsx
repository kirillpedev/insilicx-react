import React from 'react'
import styled from 'styled-components'
import no_photo from '/src/img/no_photo.svg'

const Text = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  .upper_text h1 {
    margin-top: 80px;
    text-align: center;
    font-family: "Anonymous Pro", monospace;
    font-size: 48px;
    font-weight: 700;
  }  

  .upper_text h2 {
    text-align: center;
    font-family: "Anonymous Pro", monospace;
    font-size: 20px;
    font-weight: 400;
  }
`

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    .wrapper {
      padding-top: 12px;
      padding-left: 12px;
      width: 385px;
      height: 145px;
      border-radius: 15px;
      box-shadow: 0px 0px 7px 3px #0000001a;
    }

    .wrapper a {
      margin-top: 5px;
      margin-left: 130px;
      text-decoration: none;
      font-family: "Noto Sans", sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: #00000047;
    }

    .name_info {
      display: flex;
    }

    .name_info h1 {
      padding-top: 4px;
      padding-left: 5px;
      font-family: "Noto Sans", sans-serif;
      font-size: 16px;
      font-weight: 600;
    }

    .name_info h2 {
      padding-left: 5px;
      font-family: "Noto Sans", sans-serif;
      font-size: 13px;
      font-weight: 300;
    }

    .comm {
      width: 330px;
    }

    .comm p {
      margin-top: 15px;
      margin-left: 10px;
      font-family: "Noto Sans", sans-serif;
      font-size: 16px;
      font-weight: 300;
    }

`

const Main_Reviews = () => {
  return (
      <div className='main_cont'>
        <Text>
          <div className='upper_text'>
            <h1 >Последние отзывы</h1><br></br><h2>16 y.o 10k pts shadow frend)) енджоеров</h2>
          </div>
        </Text>
        <Container>
            <div className='wrapper'>
            <div className='name_info'>
                <img src={no_photo} alt="" width="45" height="45"/>
                <div className='text_info'>
                      <h1>Петро Кирилл</h1>
                      <h2>25 янв. 2024</h2>
                </div>
                <a href=''>Перейти</a>
            </div>
                  <div className='comm'>
                    <p>Топ магазин! Чут чут получше Смешных Цен!!! 8/10 ммр</p>
                  </div>

            </div>
        </Container>
      </div>
  )
}

export default Main_Reviews
