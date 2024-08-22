import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
  <section style={{position:"relative", backgroundSize:"cover", display:"flex"}}>
    <div style={{position:"absolute"}}>
      <h1>Looking to learn how to use React JS?<br></br>Let us show you how.</h1>
      <button style={{backgroundColor:"lightskyblue", borderRadius:"10%", margin:"1cm"}}><Link to={"./Exercises"}>Exercises</Link></button>
      <button style={{backgroundColor:"white",color:"lightskyblue", borderRadius:"10%", margin:"1cm"}}><Link to={"./ContactUs"}>Contact Us</Link></button>
    </div>

    <div>
      <img src={require("../assets/office-8045898_1280.png") } alt='office' style={{height:"10cm", marginLeft:"19cm", marginTop:"4cm"}}></img>
    </div>
  </section>
  )
}
