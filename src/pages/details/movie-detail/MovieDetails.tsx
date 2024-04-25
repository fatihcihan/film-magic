import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Movie } from "../../../types/Movie";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import RelatedMovies from "../../../components/RelatedMovies/RelatedMovies";
import { MovieGenre } from "../../../types/MovieGenre";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>();
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const movie = response.data;
        console.log(movie);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <Container fluid className="pt-3 pb-3 text-white background-image">
      <Row>
        <Col md="4">
          <Image
            fluid
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            rounded
          />
        </Col>
        <Col md="8">
          <h2>{movie?.title}</h2>
          <h3 className="tagline"> {movie?.tagline}</h3>
          <h3 className="mt-2">Overview</h3>
          <p style={{ fontSize: "1.5rem" }}>{movie?.overview}</p>
          <div className="movie-subdetails">
            <div className="row">
              <div className="col-6">
                Realease Date:
                <span className="movie-metadata">
                  {" "}
                  <Badge bg="danger">{movie?.release_date}</Badge>
                </span>
              </div>
              <div className="col-6">
                Running Time:
                <span className="movie-metadata">
                  {" "}
                  <b> {movie?.runtime} mins</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                Budget:
                <span className="movie-metadata">
                  {" "}
                  <b> $ {movie?.budget} </b>{" "}
                </span>
              </div>
              <div className="col-6">
                Revenue:
                <span className="movie-metadata">
                  {" "}
                  <b> $ {movie?.revenue} </b>{" "}
                </span>
              </div>
            </div>
            <div className="col-12 text-align-center d-flex mt-3">
              <h3>Genre:</h3>
              <ul>
                {movie?.genres.map((genre) => (
                  <li className="list-group-item" key={genre.id}>
                    <p style={{ color: "#DC3545" }}>{genre.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      {/* <RelatedMovies /> */}
    </Container>
  );
};

export default MovieDetails;
