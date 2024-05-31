import React from 'react'
import { Helmet } from 'react-helmet';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainReviews from '../components/MainReviews'
import Support from '../components/Support'
const TITLE = 'Отзывы | Insilicx inc.';
const Reviews = () => {
  return (
    <div>   
      <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <Header/>
      <Support/>
      <MainReviews/>
      <Footer/>
    </div>
)
}

export default Reviews