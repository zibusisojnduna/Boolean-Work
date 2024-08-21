import React from "react";
import { useState } from "react";

function Card3(){
    const [number, setNumber] = useState("")
    const [result, setResult] = useState("")

    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"]
    return(
        <div className="w3-card-4" style={{width:"50%", padding:"1cm"}}>
            <header className="w3-card-4" style={{backgroundColor:"green", color:"white", padding:"1cm"}}>
                <h1>Is this number odd or even?</h1><br></br>
                <h2>Number</h2>
                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}></input><br></br>
                <button onClick={checkEvenOdd}>Check</button>
            </header>

            <div className="w3-card-4" style={{backgroundColor:"purple", color:"white", padding:"1cm"}}>
                <h1>Output:The number is {result} </h1>
            </div>
        </div>
    )
}