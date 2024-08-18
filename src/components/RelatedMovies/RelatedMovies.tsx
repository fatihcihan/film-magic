import React, { useEffect, useState } from "react";
import "./RelatedMovies.css";
import { RelatedMovie } from "../../types/RelatedMovie";
import axios, { AxiosResponse } from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

interface RelatedMoviesProps {
  movieId: number;
}

const RelatedMovies = ({ movieId }: RelatedMoviesProps) => {
  const [relatedMovies, setRelatedMovies] = useState<RelatedMovie[]>([]);
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

  useEffect(() => {
    const fetchRelatedMovies = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data.results, "movies data");
        setRelatedMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching related movies:", error);
      }
    };
    fetchRelatedMovies();
  }, [movieId, accessToken]);

  return (
    <Container className="mt-5">
      <h2 className="display-5 text-danger mb-4">Related Movies</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {relatedMovies.map((movie) => (
          <Col key={movie.id}>
            <Card className="related-movie-card">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="related-movie-card-img"
              />
              <Card.Body className="related-movie-card-body">
                <Card.Title className="related-movie-card-title">
                  <h1 className="related-movie-card-title">{movie.title}</h1>
                  <p className="related-movie-card-subtitle">
                    {movie.overview}
                  </p>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RelatedMovies;
