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

function Home() {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const imageUrl = "https://media.themoviedb.org/t/p/w94_and_h141_bestv2";

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
      <Row>
        {movies &&
          movies.map((movie) => (
            <Col key={movie.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`${imageUrl}/${movie.poster_path}`}
                />
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
          ))}
      </Row>
    </Container>
  );
}

export default Home;