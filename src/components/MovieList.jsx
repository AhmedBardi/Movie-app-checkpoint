import React from "react";
import MovieCard from "./MovieCard";
import './movieList.css'


const MovieList = ({ movies, searchTitle, searchRate}) => { 
    return (
        
        <div className="movie-container ">
            
            {movies
            .filter(movie => movie.title.toUpperCase().includes(searchTitle.toUpperCase())
            && movie.rate === searchRate
        )
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            
        </div>
            )
}

export default MovieList

