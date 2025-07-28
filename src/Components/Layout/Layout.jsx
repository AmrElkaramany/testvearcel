import React from 'react'
import Navabr from '../Navbar/Navabr'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
   <>
   
   <Navabr/>



 {/* Routing */}


<div className="container my-4">
    <Outlet></Outlet>

</div>



   
   
   </>
  )
}
