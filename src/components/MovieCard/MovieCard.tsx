import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";
import axios, { AxiosResponse } from "axios";
import { GoStarFill } from "react-icons/go";
import "./MovieCard.css";

function MovieCard(props: {
  movie: Movie;
  deleteMovie?: (movie: Movie) => void;
}) {
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const { movie, deleteMovie } = props;

  const shortenOverview = (overview: string, maxLength: number) => {
    if (overview.length <= maxLength) {
      return overview;
    } else {
      return overview.slice(0, maxLength - 3) + "...";
    }
  };

  const handleDelete = () => {
    if (deleteMovie) {
      deleteMovie(movie);
    }
  };

  return (
    <>
      <Card className="bg-light border-0 col-md-4 col-sm-6 col-lg-3 mb-3 movie-card ">
        <Card.Img
          variant="top"
          src={`${imageUrl}/${movie.poster_path}`}
          className="movie-card-img"
        />
        <Card.Body className="d-flex flex-column movie-card-body">
          <Card.Title className="mb-1 movie-card-title">{movie.title}</Card.Title>
          <Card.Text className="movie-card-text">{shortenOverview(movie.overview, 100)}</Card.Text>
          <div className="d-flex justify-content-between">
            <Card.Link as={Link} to={`details/${movie.id}`}>
              <Button variant="outline-primary" size="lg">
                Details
              </Button>
            </Card.Link>
            <Card.Title className="p-2 movie-card-title">
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
