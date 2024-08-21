import React from 'react'
import Card from '../componenets/card'
import CardTwo from '../componenets/card2'
import Card3 from '../componenets/card3'


export default function Exercises() {
  return (
    <section style={{textAlign:"center", position:"relative", color:"white", backgroundSize:"cover"}}>
      <img src={require("../assets/thought-catalog-505eectW54k-unsplash.jpg")} alt='exercises' style={{height:"8cm", width:"100%", }}></img>
      <div style={{position:"absolute", top:"16%", left:"50%", transform:"translate(-40%, -40%)"}}><h1>Excercises</h1></div>

      <div style={{display:"flex"}}>
        <Card/>
        <CardTwo/>
        <Card3/>
      </div> 
    </section>
    
  
    
  )
}
