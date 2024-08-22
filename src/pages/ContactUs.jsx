import React from 'react'

export default function ContactUs() {
  return (
    <section>
      <img src={require("../assets/tim-gouw-v8pE7-pukyY-unsplash.jpg")} alt='call' style={{height:"8cm", width:"100%"}}></img>
      
      <div style={{position:"absolute", top:"15%", left:"43%" }}>
        <h1 style={{color:"white", }}>Contact Us</h1>
      </div>

      <div style={{backgroundColor:"lightskyblue", width:"100%", }}>
        <form>
          <h1>Feel free to get in touch!</h1>

          <h2>Name</h2><br></br>
          <input type='text' placeholder='Name' style={{borderRadius:"10cm"}}></input><br></br>

          <h2>Phone Number</h2><br></br>
          <input type='text' placeholder='Phone Number' style={{borderRadius:"10cm"}}></input><br></br>

        </form>
      </div>
    </section>
  )
}
