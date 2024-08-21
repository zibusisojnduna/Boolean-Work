function Card(){
    return(
        <div className="w3-card-4" style={{width:"50%"}}>
            <header className="w3-card-4" style={{backgroundColor:"green", color:"white",}}>
                <h1>What is the biggest number?</h1><br></br>
                <h2 style={{display:"flex"}}>Num 1</h2>
                <input type="text"></input><br></br>
                <h2 style={{display:"flex"}}>Num 2</h2>
                <input type="text"></input><br></br>
                <button>Calculate</button>
            </header>

            <div className="w3-card-4" style={{backgroundColor:"purple", color:"white"}}>
                <h1>Output: The biggest number is</h1>
            </div>
        </div>
    )
}
export default Card