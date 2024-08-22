import React from "react";
import movies from "../assets/movies";

function MoreInfo({movie}){

    return(
     <div>
         <div>
        <img src={require(movie.imageURL)} alt="image" style={{height:"50%", width:"100%"}}></img>
        </div>

        <div>
            <h1 style={{fontWeight:'bold'}}>{movie.title}</h1>
            <h4></h4>

        </div>

    </div>
   
    )
}
export default MoreInfo