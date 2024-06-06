import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-creative';

// import required modules
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from 'swiper/modules';

import slide_1 from '/src/img/slide_1.svg'
import slide_2 from '/src/img/slide_2.svg'
import slide_3 from '/src/img/slide_3.svg'
import styled from 'styled-components'


const Photo = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    .slider {
        min-width: 1325px;
        min-height: 560px;
        text-align: center;
        margin-right: 20%;
        margin-left: 15%;
        margin-bottom: 8%;
        margin-top: 50px;
    }

    .slider h1 {
        margin-top: 90px;
        margin-bottom: 60px;
        text-align: center;
        font-family: "Anonymous Pro", monospace;
        font-size: 48px;
        font-weight: 700;
    }
    .slider h2 {
        text-align: center;
        font-family: "Anonymous Pro", monospace;
        font-size: 20px;
        font-weight: 500;
    }

    .slider img {
      border-radius: 10px;
      box-shadow: #5e5e5e63 6px 5px 20px ;
      margin-bottom: 30px;
      
    }
`



const Slider = () => {
  return (
    <Photo>
        <div className='slider'>
        <h1>Примеры TripleS лука<h2>если ты 15 y.o 2k pts arc warden енджоер</h2></h1>
            <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            effect={'creative'}
            pagination={{
              clickable: true,
            }}
            creativeEffect={{
              prev: {
                
                translate: [-400, 0, -700],
              },
              next: {
                translate: [400, 0, -800],
              },
            }}
            modules={[Autoplay, Pagination, EffectCreative]}
            className="mySwiper"
            >
                <SwiperSlide>
                <img src={slide_1} alt="" width= '535px' height= '535px' />
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide_1} alt="" width= '535px' height= '535px' />
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide_1} alt="" width= '535px' height= '535px' />
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide_2} alt="" width= '535px' height= '535px' />
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide_3} alt="" width= '535px' height= '535px' />
            </SwiperSlide>
            </Swiper>
        </div>
    </Photo>
  )
}

export default Slider