import React from 'react'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import ErrorPage from './pages/ErrorPage';
import ProductPage from './pages/ProductPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "reviews",
    element: <Reviews />
  },
  {
    path: "productpage",
    element: <ProductPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
  
])

const App = () => {
  return (
    <RouterProvider router={router} />
  ) 
}

export default App;
