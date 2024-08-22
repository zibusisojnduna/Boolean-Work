import React from 'react'

export default function ContactUs() {
  function Submit(){
    alert("Your information has been saved!")
  }

  return (
    <section>
      <img src={require("../assets/tim-gouw-v8pE7-pukyY-unsplash.jpg")} alt='call' style={{height:"8cm", width:"100%"}}></img>
      
      <div style={{position:"absolute", top:"15%", left:"43%" }}>
        <h1 style={{color:"white", }}>Contact Us</h1>
      </div>

      <div style={{backgroundColor:"lightskyblue", width:"100%", height:"100%"}}>
        <form>
          <h1>Feel free to get in touch!</h1>

          <h2>Name</h2><br></br>
          <input type='text' placeholder='Name' style={{borderRadius:"10cm"}}></input><br></br>

          <h2>Phone Number</h2><br></br>
          <input type='text' placeholder='Phone Number' style={{borderRadius:"10cm"}}></input><br></br>

          <h2>Email Address</h2><br></br>
          <input type='email' placeholder='Email Address' style={{borderRadius:"10cm"}}></input><br></br>

          <h2>Do you have any questions in particular?</h2><br></br>
          <textarea placeholder='Type your question(s) here' style={{borderRadius:"10cm"}}></textarea><br></br>

          <button style={{backgroundColor:"white", color:"lightskyblue",borderRadius:"10cm"}} onClick={Submit}>Submit</button>


        </form>
      </div>
    </section>
  )
}
