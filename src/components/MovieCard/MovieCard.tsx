import { Button, Card } from "react-bootstrap";
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
// http://localhost:3000/movies/top-rated/details/278
  return (
    <>
      <Card className="bg-light border-0 col-md-4 col-sm-6 col-lg-3 mb-3">
        <Card.Img variant="top" src={`${imageUrl}/${movie.poster_path}`} />
        <Card.Body className="d-flex flex-column ">
          <Card.Title className="mb-4">{movie.title}</Card.Title>
          <Card.Text className="description">{shortenOverview(movie.overview, 100)}</Card.Text>
          <div className="d-flex justify-content-between">
            <Card.Link as={Link} to={`details/${movie.id}`}>
              <Button variant="outline-primary" size="lg">
                Details
              </Button>
            </Card.Link>
            <Card.Link onClick={handleDelete}>
              <Button variant="outline-danger" size="lg">
                Delete
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
