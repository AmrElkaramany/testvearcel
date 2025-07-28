import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Components/home/Home'
import About from './Components/About/About'
import Layout from './Components/Layout/Layout'
import Parent from './Components/Parent/Parent'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {


 let x =  createBrowserRouter([

    {path:'' , element:<Layout/> , children:[
          {path:'home' , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'parent' , element:<Parent/>},
    {path:'parent' , element:<Parent/>},
    {path:'portfolio' , element:<Portfolio/>},
   
    ]}
  ])


  return <RouterProvider router={x}></RouterProvider>
}

export default App
