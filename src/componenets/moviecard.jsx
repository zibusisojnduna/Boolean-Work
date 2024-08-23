import React from "react"
import { useState } from "react"

import { RiStarSFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import MoreInfo from "../pages/movieView.jsx"


function MovieCard({film}){




    return(
        <div className="w3-card-4" style={{width:"30%", backgroundColor:"lightskyblue", margin:"1%", height:"10%" }}>
            
            <div>
                <img src={require(film.imageUrl)} alt="image" style={{height:"100%", width:"100%"}}></img>
            </div>

            <div style={{padding:"2%"}}>
                <h1 style={{fontWeight:"bold"}}>{film.title}</h1>
                <h4>Director: {film.director}</h4>
                <h4>Year of release: {film.year}</h4>
                <h4>Genre: {film.genre}</h4>
                <h4><RiStarSFill/>Rating: {film.rating}</h4>
                
            </div>

            <div>
                <button><Link to={`${film.id}`}/>Read More</button>
            </div>
        </div>

        
    )
}
export default MovieCard