import React from 'react';
import styled from 'styled-components';
import no_photo from '/src/img/no_photo.svg';
import judje from '../img/Judje.png';
import Reviews from "../Reviews";
import {Animated} from 'react-animated-css'
const Grid = styled.div`
    /* .grid_cont {
      display: grid;
      grid-template-columns: 455px 455px 1fr;
      margin-left: auto;
      margin-right: auto; 
      width: 82em;
      margin-bottom: 220px;
      margin-top: 50px;
  //  } */
`
const Grid_cont = styled.div`
   display: grid;
      grid-template-columns: 455px 455px 1fr;
      /* margin-left: 16%; */
      margin-left: auto;
      margin-right: auto; 
      width: 82em;
      margin-bottom: 220px;
      margin-top: 50px;
`

const Text = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');

`


const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

`

const Main_Cont = styled.div`
  
`
const Upper_Text = styled.div`
  
`
const Upper_TextH1 = styled.h1`
    margin-top: 3%;
    text-align: center;
    font-family: "Anonymous Pro", monospace;
    font-size: 48px;
    font-weight: 700;
`
const Upper_TextH2 = styled.h2`
margin-top: 10px;
    text-align: center;
    font-family: "Anonymous Pro", monospace;
    font-size: 20px;
    font-weight: 400;
`
const Wrapper = styled.div`
   margin-top: 8%;
      padding-top: 12px;
      padding-left: 12px;
      width: 385px;
      height: 145px;
      border-radius: 15px;
      box-shadow: 0px 0px 7px 3px #0000001a;
`
const Name_Info = styled.div`
  display: flex;

`
const Name_InfoH1 = styled.h1`
   padding-top: 4px;
  padding-left: 5px;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
`
const Name_InfoH2 = styled.h2`
 padding-left: 5px;
  font-family: "Noto Sans", sans-serif;
  font-size: 13px;
  font-weight: 300;
`
const Name_Info_Img = styled.img`
   border-radius: 50px;
`
const Text_Info = styled.div`
  
`
const NameInfo_A = styled.a`
  margin-top: 5px;
  margin-left: 300px;
  position: absolute;
  text-decoration: none;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #00000047;
`
const Comm = styled.div`
  width: 330px;
`
const CommP = styled.p`
   margin-top: 15px;
      margin-left: 10px;
      font-family: "Noto Sans", sans-serif;
      font-size: 16px;
      font-weight: 300;
`
const Main_Reviews = () => {
  return (
      <Main_Cont>
        <Animated animationIn="fadeIn" animationInDuration='1000' isVisible={true}>
        <Text>
          <Upper_Text>
            <Upper_TextH1>Последние отзывы</Upper_TextH1><Upper_TextH2>16 y.o 10k pts shadow frend)) енджоеров</Upper_TextH2>
          </Upper_Text>
        </Text>
        <Grid>
          <Grid_cont>
            {Reviews.map((Feedback) => (
                <Container>
                    <Wrapper>
                    <Name_Info>
                        <Name_Info_Img src={Feedback.photo} alt="" width="45" height="45"/>
                        <Text_Info>
                              <Name_InfoH1>{Feedback.name}</Name_InfoH1>
                              <Name_InfoH2>{Feedback.date}</Name_InfoH2>
                        </Text_Info>
                        <NameInfo_A href={Feedback.link}>Перейти</NameInfo_A>
                    </Name_Info>
                          <Comm>
                            <CommP>{Feedback.description}</CommP>
                          </Comm>

                    </Wrapper>
                </Container>
              ))}
           </Grid_cont>
        </Grid>
        </Animated>
      </Main_Cont>

  )
}

// const Main_Reviews = () => {
//   return (
//       <div className='main_cont'>
//         <Text>
//           <div className='upper_text'>
//             <h1 >Последние отзывы</h1><h2>16 y.o 10k pts shadow frend)) енджоеров</h2>
//           </div>
//         </Text>
//         <Grid>
//             <div className='grid_cont'>
//                 <Container>
//                     <div className='wrapper'>
//                     <div className='name_info'>
//                         <img src={no_photo} alt="" width="45" height="45"/>
//                         <div className='text_info'>
//                               <h1>Петро Кирилл</h1>
//                               <h2>25 янв. 2024</h2>
//                         </div>
//                         <a href=''>Перейти</a>
//                     </div>
//                           <div className='comm'>
//                             <p>Топ магазин! Чут чут получше Смешных Цен!!! 8/10 ммр</p>
//                           </div>

//                     </div>
//                 </Container>

//                 <Container>
//                     <div id='margin' className='wrapper'>
//                     <div className='name_info'>
//                         <img src={no_photo} alt="" width="45" height="45"/>
//                         <div className='text_info'>
//                               <h1>Горбатый калоед</h1>
//                               <h2>25 янв. 2024</h2>
//                         </div>
//                         <a href=''>Перейти</a>
//                     </div>
//                           <div className='comm'>
//                             <p>Топ магазин! Чут чут получше Смешных Цен!!! 8/10 ммр</p>
//                           </div>

//                     </div>
//                 </Container>

//                 <Container>
//                     <div className='wrapper'>
//                     <div className='name_info'>
//                         <img src={no_photo} alt="" width="45" height="45"/>
//                         <div className='text_info'>
//                               <h1>Данька 4 в диаметре)</h1>
//                               <h2>25 янв. 2024</h2>
//                         </div>
//                         <a href=''>Перейти</a>
//                     </div>
//                           <div className='comm'>
//                             <p>Не налазит.</p>
//                           </div>

//                     </div>
//                 </Container>

//                 <Container>
//                     <div className='wrapper'>
//                     <div className='name_info'>
//                         <img className='judje' src={judje} alt="" width="45" height="45"/>
//                         <div className='text_info'>
//                               <h1>Judje123</h1>
//                               <h2>25 янв. 2024</h2>
//                         </div>
//                         <a href=''>Перейти</a>
//                     </div>
//                           <div className='comm'>
//                             <p>СВежее мясо))</p>
//                           </div>

//                     </div>
//                 </Container>

//                 <Container>
//                     <div id='margin1' className='wrapper'>
//                     <div className='name_info'>
//                         <img src={no_photo} alt="" width="45" height="45"/>
//                         <div className='text_info'>
//                               <h1>Suzuya Juzo</h1>
//                               <h2>25 янв. 2024</h2>
//                         </div>
//                         <a href=''>Перейти</a>
//                     </div>
//                           <div className='comm'>
//                             <p>Топ магазин! Чут чут получше Смешных Цен!!! 8/10 ммр</p>
//                           </div>

//                     </div>
//                 </Container>

//                 <Container>
//                     <div className='wrapper'>
//                     <div className='name_info'>
//                         <img src={no_photo} alt="" width="45" height="45"/>
//                         <div className='text_info'>
//                               <h1>Advokat666</h1>
//                               <h2>25 янв. 2024</h2>
//                         </div>
//                         <a href=''>Перейти</a>
//                     </div>
//                           <div className='comm'>
//                             <p>После покупки лонгклиффа chxse the sun винрейт на сфе больше 50%!!! Наконец! Советую работягам</p>
//                           </div>

//                     </div>
//                 </Container>
//             </div>
//         </Grid>
        
//       </div>

//   )
// }

export default Main_Reviews
