import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from "./Rating";



const MovieCard = ({ movie }) => { 
    return (
        <div> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <hr />
        
          <Rating rate={movie.rate} isRating={true}/>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
    )
}

export default MovieCard