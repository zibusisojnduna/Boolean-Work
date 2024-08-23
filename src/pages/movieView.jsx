import React from "react";
import movies from "../assets/movies";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";





function MoreInfo(){

    const {id} = useParams()
    



    return(
     <div style={{textAlign:"center"}}>
         <div>
        <img src={require(movies[id].imageUrl)} alt="image" height={""} width={"100%"} ></img>
        </div>

        <div>
            <h1 style={{fontWeight:'bold'}}>{movies[id].title}</h1>
            <h2>{movies[id].director}</h2>
            <h2>{movies[id].year}</h2>
            <h2>{movies[id].genre}</h2>
            <h2>{movies[id].rating}</h2>

        </div>

        <div>
            <h2>{movies[id].description}</h2>
        </div>

        <button style={{padding:"1%"}}><Link to={"../Movies"}/>Back</button>

    </div>
   
    )
}
export default MoreInfo