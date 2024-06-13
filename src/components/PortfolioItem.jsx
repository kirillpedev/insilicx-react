import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Content = styled.div`
        margin-top: 40px;
        height: 330px;
        width: 215;
`

const Title = styled.h1 `
        margin-top: 20px;
        font-family: "Noto Sans", sans-serif;
        font-size: 18px;
        font-weight: 300;
        color: black;
`

const Cost = styled.h1 `
        color: black;
        font-family: "Noto Sans", sans-serif;
        font-size: 24px;
        font-weight: 600;
        text-decoration: none;
`

const Image = styled.img `

`

function PortfolioItem({ work }) {
    return (

        <Link to={`/product/${work.id}`}>
            <Content>
                <Image src={work.screenshot} alt='' width={300} height={300}></Image>
                <Title>
                {work.title}
                <Cost>{work.cost} ₽</Cost>
                </Title>
             </Content>
        </Link>
    );
}

export default PortfolioItem;