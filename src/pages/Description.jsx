import { Button, Descriptions } from 'antd'
// import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { moviesData } from '../data/moviesData.js';
import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

const Description = () => {
  const params = useParams(); // de récupérer la partie dynamique de mon URL
  const [movie, setMovie] = useState({}); //Recevoir un film qui correspond à l'URL
  // recherche du film (id dans params.id) dans le tableau moviesData
  useEffect(() => {
    setMovie(moviesData.find((film) => film.id === +params.id) || {});
  }, [params.id]);
//Pour naviguer d'une page à une autre 
const navigate=useNavigate()


  return <div className="row m-5">
    <div className="col-4">
    <h3>{movie.title}</h3>
    <hr/>
    {movie.description}
    <hr/>
    <Button variant='outline-secondary' onClick={()=>{navigate(-1)}}>Back</Button>
    </div>
    

    <div className="col-8 m-auto"><iframe src={movie.trailer} title={movie.title}/> </div>        
    </div>
};

export default Description;