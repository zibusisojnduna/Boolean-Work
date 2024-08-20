import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Nav from '../componenets/nav';
import Footer from '../componenets/footer';
export default function Layout() {
  return (

      <>
        <Nav/>
        <p>Hi</p>
        <Outlet/>
        <Footer/>
      </>
    
  )
}
