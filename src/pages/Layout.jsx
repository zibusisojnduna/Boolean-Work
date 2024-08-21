import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from '../componenets/nav';
import Footer from '../componenets/footer';
export default function Layout() {
  return (

      <>
        <Nav/>
      
        <Outlet/>
        <Footer/>
      </>
    
  )
}
