import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Span = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    padding-bottom: 200px;
    
    .span {
        padding: 0 270px 0 270px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        justify-items: center;   
        grid-gap: 50px;
    }
    
    .content {
        margin-top: 40px;
        height: 330px;
        width: 215;
    }
    .content h1 {
        margin-top: 20px;
        font-family: "Noto Sans", sans-serif;
        font-size: 18px;
        font-weight: 300;
        color: black;
    }
    .content h2 {
        color: black;
        font-family: "Noto Sans", sans-serif;
        font-size: 24px;
        font-weight: 600;
        text-decoration: none;
    }
`
function PortfolioItem({ work }) {
    return (
        <Link to={`/product/${work.id}`}>
            <div className='content'>
                <img
                    src={work.screenshot}
                    alt=''
                    width={300}
                    height={300}
                />
                <h1>{work.title}
                <h2>{work.cost}</h2>
                </h1>
            </div>
        </Link>
    );
}

export default PortfolioItem;