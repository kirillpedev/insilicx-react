import React from 'react';
import styled from 'styled-components';
import Reviews from "../Reviews";
import {Animated} from 'react-animated-css'


const Grid_cont = styled.div`
  padding: 0 5% 0 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 400px));
  justify-content: center;
  justify-items: center;   
  grid-gap: 50px;
  margin-bottom: 220px;
  margin-top: 65px;
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

    @media (max-width: 850px) {
      margin-top: 2%;
      font-size: 36px;
    }
`
const Upper_TextH2 = styled.h2`
    margin-top: 10px;
    text-align: center;
    font-family: "Anonymous Pro", monospace;
    font-size: 20px;
    font-weight: 400;

    @media (max-width: 850px) {
      margin-top: 8px;
      font-size: 16px;
    }
`
const Wrapper = styled.div`
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
        </Animated>
      </Main_Cont>

  )
}

export default Main_Reviews
