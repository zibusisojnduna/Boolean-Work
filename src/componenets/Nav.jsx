import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="w3-bar w3-blue">
  <Link to={"/"} className="w3-bar-item w3-button">Home</Link>
  <Link to={"/TrafficLight"} className="w3-bar-item w3-button">Traffic Light</Link>
  <Link to={"/Exercises"} className="w3-bar-item w3-button">Exercises</Link>
  <Link to={"/NoPage"} className="w3-bar-item w3-button">Settings</Link>
  <button style={{backgroundColor:"transparent", color:"white", borderRadius:"10%", border:"none",marginLeft:"23cm", cursor:"pointer"}}>Log In</button>
  <button style={{backgroundColor:"white", borderRadius:"7%", cursor:"pointer", border:"none" }}>Sign Up</button>
</div>
  )
}
