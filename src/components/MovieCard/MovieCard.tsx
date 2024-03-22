import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";
import { GoStarFill } from "react-icons/go";
import "./MovieCard.css";

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
        <Card.Body className="d-flex flex-column">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{shortenOverview(movie.overview, 100)}</Card.Text>
          <div className="d-flex justify-content-between">
            <Card.Link as={Link} to={`/details/${movie.id}`}>
              <Button variant="outline-primary" size="lg">
                Details
              </Button>
            </Card.Link>
            <Card.Title style={{ marginTop: "10px" }}>
              <span>
                <GoStarFill className="gold-star" />{" "}
                {movie.vote_average.toFixed(1)}
              </span>
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
