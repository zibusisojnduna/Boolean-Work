import React from 'react'
import Card from '../componenets/card'


export default function Exercises() {
  return (
    <section style={{textAlign:"center", position:"relative", color:"white", backgroundSize:"cover"}}>
      <img src={require("../assets/thought-catalog-505eectW54k-unsplash.jpg")} alt='exercises' style={{height:"8cm", width:"100%", }}></img>
      <div style={{position:"absolute", top:"22%", left:"50%", transform:"translate(-40%, -40%)"}}><h1>Excercises</h1></div>

      <div>
        <Card/>
      </div> 
    </section>
    
  
    
  )
}
