import React from "react";
import { useState } from "react";

function Card3(){
    const [number, setNumber] = useState("")
    const [result, setResult] = useState("")

    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    const checkDayOfTheWeek = () => {
        const num = parseInt(number, 10)

        if(isNaN(num) || num < 0 || num > 6){
            setResult("Please enter a number between 0 and 6.")
        }else{
            setResult()
        }

    }

    return(
        <div className="w3-card-4" style={{width:"50%", padding:"1cm"}}>
            <header className="w3-card-4" style={{backgroundColor:"green", color:"white", padding:"1cm"}}>
                <h1>Which day of the week is this number?</h1><br></br>
                <h2>Number</h2>
                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}></input><br></br>
                <button onClick={checkDayOfTheWeek}>Check</button>
            </header>

            <div className="w3-card-4" style={{backgroundColor:"purple", color:"white", padding:"1cm"}}>
                <h1>It is {result} </h1>
            </div>
        </div>
    )
}
export default Card3