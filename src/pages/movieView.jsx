import React from "react";
import movies from "../assets/movies";

function MoreInfo(){

    

    return(
     <div>
         <div>
        <img src={require(movies[0].imageUrl)} alt="image" height={"50%"} width={"100%"} ></img>
        </div>

        <div>
            <h1 style={{fontWeight:'bold'}}>{movies[0].title}</h1>
            <h2>{movies[0].director}</h2>
            <h2>{movies[0].year}</h2>
            <h2>{movies[0].genre}</h2>
            <h2>{movies[0].rating}</h2>

        </div>

        <div>
            <h2>{movies[0].description}</h2>
        </div>

    </div>
   
    )
}
export default MoreInfo