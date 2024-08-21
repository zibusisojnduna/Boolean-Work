import React from "react"
import { useState } from "react"

function Card(){
const [number1, setNumber1] = useState("")
const [number2, setNumber2] = useState("")
const [result, setResult] = useState("")

const compareNumbers = () =>{
    const num1 = parseFloat(number1)
    const num2 = parseFloat(number2)

    if(isNaN(num1) || isNaN(num2)){
        setResult("Please enter valid numbers")

    }else if(num1 > num2){
        setResult(num1)
    }else if(num1 < num2){
        setResult(num2)
    }else{
        setResult("Both numbers are equal")
    }
}
    
    return(
        <div className="w3-card-4" style={{width:"50%", padding:"1cm"}}>
            <header className="w3-card-4" style={{backgroundColor:"green", color:"white", padding:"1cm"}}>
                <h1>What is the biggest number?</h1><br></br>
                <h2>Num 1</h2>
                <input type="text" value={number1} onChange={(e) => setNumber1(e.target.value)}></input><br></br>
                <h2>Num 2</h2>
                <input type="text" value={number2} onChange={(e) => setNumber2(e.target.value)}></input><br></br>
                <button onClick={compareNumbers}>Calculate</button>
            </header>

            <div className="w3-card-4" style={{backgroundColor:"purple", color:"white", padding:"1cm"}}>
                <h1>Output: The biggest number is {result}</h1>
            </div>
        </div>
    )

}
export default Card