import React from 'react'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
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
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  ) 
}

export default App;
