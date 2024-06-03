import React, { useEffect } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error404 from "../components/Error404";

const ErrorPage = () => {
  return (
    <div> 
        <Header/>
        <Error404/>
        <Footer/>
    </div>
  )
}

export default ErrorPage