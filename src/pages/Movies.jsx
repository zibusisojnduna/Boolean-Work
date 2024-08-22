import React from "react";
import { useState } from "react";
import MovieCard from "../componenets/moviecard";
import movies from "../assets/movies";

function MoviesPage(){
    return(
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {movies.map((item, index) => (
             <MovieCard key={index}  film={item}/>
            ))}
        </div>
    )
}
export default MoviesPage