import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { Movie } from "../../types/Movie";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState<Movie[] | null>([]);

  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data: Movie[] = response.data.results;
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      <Row lg={4}>{movies && movies.map((movie) => <MovieCard movie={movie} />)}</Row>
    </Container>
  );
}

export default Home;
