import React,{ useState } from 'react';
import MovieList from "../components/MovieList";
import { moviesData } from "../data/moviesData";
import AddMovie from '../components/AddMovie';
import FilterByTitle from '../components/FilterByTitle';
import Rating from '../components/Rating';


const Home = () => { 
    const [movies, setMovies] = useState(moviesData);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchRate, setSearchRate] = useState(1);
    const addNewMovie = (newMovie) => {
    //elle va rajouter le nouveau film en fin de tableux movies
        setMovies([newMovie,...movies])
    }
    console.log(searchTitle) 
    
    return (
        <div>
            <h1 className='m-5'>Movie App</h1>
            <FilterByTitle searchTitle={searchTitle} setSearchTitle={setSearchTitle}/>
            <Rating searchRate={searchRate} setSearchRate={setSearchRate} isRating={false}/>
            <AddMovie addNewMovie={addNewMovie}/>
            <hr />
            
            <MovieList movies={movies} searchTitle={searchTitle} searchRate={searchRate} />
             
        </div>
            );
};

export default Home