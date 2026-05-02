import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  return (
    <div>
      
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <hr />
          <Rating rate={movie.rate} isRating={true} />

          <Link to={`/movie/${movie.id}`}>
          {/* Back Tics : AltGr+7 */}
             {" "}
            <Button variant="primary">Detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
