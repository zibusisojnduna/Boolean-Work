import React from "react"
import { useState } from "react"

function Card(){
const [num1, setNum1] = useState("")
const [num2, setNum2] = useState("")
const [result, setResult] = useState("")

const compareNumbers = () =>{
    const num1 = parseFloat(num1)
    const num2 = parseFloat(num2)

    if(isNaN(num1) || isNaN(num2)){
        setResult("Please enter valid numbers")

    }else if(num1 > num2){
        setResult("${num2}")
    }else if(num1 < num2){
        setResult("${num2}")
    }else{
        setResult("Both Numbers are equal")
    }
}
    
    return(
        <div className="w3-card-4" style={{width:"50%", padding:"1cm"}}>
            <header className="w3-card-4" style={{backgroundColor:"green", color:"white", padding:"1cm"}}>
                <h1>What is the biggest number?</h1><br></br>
                <h2>Num 1</h2>
                <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)}></input><br></br>
                <h2>Num 2</h2>
                <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)}></input><br></br>
                <button onClick={compareNumbers}>Calculate</button>
            </header>

            <div className="w3-card-4" style={{backgroundColor:"purple", color:"white", padding:"1cm"}}>
                <h1>Output: The biggest number is {result}</h1>
            </div>
        </div>
    )

}
export default Card