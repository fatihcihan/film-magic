import { useParams } from "react-router-dom";
import "./Details.css";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Movie } from "../../types/Movie";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>();
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;
  const imageUrl = process.env.REACT_APP_IMAGE_URL;

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
        console.log(movie, "res data");
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <Container className="mt-4">
      <Row>
        <Col lg={4}>
          <Image src={`${imageUrl}/${movie?.poster_path}`} rounded />
          {movie?.title}
          <br></br>
          {movie?.overview}
        </Col>
        {/* <Col lg={4}>{movie?.overview}</Col>
        <Col lg={4}>{movie?.overview}</Col> */}
      </Row>
    </Container>
  );
}

export default Details;
