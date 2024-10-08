import React from "react"
import { useState } from "react"

function CardTwo(){
    const [number, setNumber] = useState("")
    const [result, setResult] = useState("")

    const checkEvenOdd = () => {
        const num = parseFloat(number)

        if (isNaN(num)){
            setResult("Please enter a valid")
        }else if (num % 2 == 0){
            setResult("Is an even number.")
        }else{
            setResult("Is an odd number.")
        }
    }
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
export default CardTwo