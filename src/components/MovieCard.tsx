import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Movie } from "../types/Movie";

function MovieCard(props: { movie: Movie }) {
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const { movie } = props;

  return (
    <Card style={{ width: "18rem", margin:'0 18px' }} >
      <Card.Img variant="top" src={`${imageUrl}/${movie.poster_path}`} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
        <Link to={`/details/${movie.id}`}>
          <Button variant="outline-primary" size="lg">
            Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
