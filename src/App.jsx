import React from 'react';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import ErrorPage from './pages/ErrorPage';
import SliderPage from './pages/SliderPage';
import Order from './pages/Order';
// import ProductPage from './pages/ProductPage';
import ProductPage, {
  loader,
} from "./pages/ProductPage";

import {
  createBrowserRouter,
  RouterProvider, Route, redirect } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "reviews",
    element: <Reviews />
  },
  {
    path: "product/:id",
    element: <ProductPage />,
    loader: loader,
  },
  {
    path: "photos",
    element: <SliderPage />
  },
  {
    path: "order",
    element: <Order />
  }
  
])
const App = () => {
  return (
    <RouterProvider router={router} />
  ) 
}


export default App;
