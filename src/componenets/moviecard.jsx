import React from "react"
import { useState } from "react"
import movies from "../assets/movies"
import { RiStarSFill } from "react-icons/ri"

function MovieCard(){

let film = movies

    return(
        <div className="w3-card-4" style={{width:"50%", padding:"1cm"}}>
            <div style={require=(film.imageUrl)}></div>

            <div>
                <h4 style={{color:"white"}}>{film.title}</h4><br></br>
                <h4 style={{color:"white"}}>By {film.director}</h4><br></br>
                <h4 style={{color:"white"}}>Year of release: {film.year}</h4><br></br>
                <h4 style={{color:"white"}}>Genre: {film.genre}</h4>
                <h4 style={{color:"white"}}><RiStarSFill/>Rating: {film.rating}</h4><br></br>
            </div>

            <div>
                <h4 style={{color:"white"}}>Description: {film.description}</h4>
            </div>
        </div>

        
    )
}
export default MovieCard