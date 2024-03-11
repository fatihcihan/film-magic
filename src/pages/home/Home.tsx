import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

interface Movie {
  id: string;
  title: string;
  overview: string;
}

function Home() {
  const [movies, setMovies] = useState<Movie[] | null>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjE2YjdiY2Y5ODlhOTU4YmUxZTZlOWI2MTU4MDRhYiIsInN1YiI6IjY0MjRiNjZiYzk5ODI2MDBiNjAwMWNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dqNPCxMi4kDfz7NQVV1287oeLEJqlKoAWHDyksGEUfU",
            },
          }
        );
        const data: Movie[] = response.data.results;
        console.log(data, "data");
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
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Home;