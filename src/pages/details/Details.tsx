import { useParams } from "react-router-dom";
import "./Details.css";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Movie } from "../../types/Movie";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

function Details() {
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
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            rounded
          />
        </Col>
        <Col>
          <Card border="primary">
            <Card.Body>
              <Card.Title>{movie?.title}</Card.Title>
              <Card.Text style={{fontSize:"30px"}}>{movie?.overview}</Card.Text>
              <Button variant="primary">Watch Trailer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
