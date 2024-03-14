import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Movie } from "../types/Movie";

function MovieCard(props: { movie: Movie }) {
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const { movie } = props;

  const shortenOverview = (overview: string, maxLength: number) => {
    if (overview.length <= maxLength) {
      return overview;
    } else {
      return overview.slice(0, maxLength - 3) + "...";
    }
  };

  return (
    <>
      <Card style={{ width: "18rem", margin: "0 18px", marginBottom: "30px" }}>
        <Card.Img variant="top" src={`${imageUrl}/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{shortenOverview(movie.overview, 100)}</Card.Text>
          <Link to={`/details/${movie.id}`}>
            <Button variant="outline-primary" size="lg">
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
