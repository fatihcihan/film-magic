import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Movie } from "../types/Movie";

function MovieCard(props: { movie: Movie }) {
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const { movie } = props;
  console.log(movie);

  return (
    <Col key={movie.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${imageUrl}/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.overview}</Card.Text>
          <Link to="test">
            <Button variant="outline-primary" size="lg">
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;
