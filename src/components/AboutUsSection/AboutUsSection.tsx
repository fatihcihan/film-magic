import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./AboutUsSection.css";
import { Movie } from "../../types/Movie";
import axios, { AxiosResponse } from "axios";

const AboutUsSection = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const imageUrl = process.env.REACT_APP_IMAGE_URL;

  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

  const fetchMovies = async (): Promise<void> => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const movies: Movie[] = response.data.results;
      setMovies(movies);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="generic">
      <Container>
        <h2 className="display-5 text-danger mb-4">UPCOMING</h2>
        {movies?.slice(0, 2).map((movie, index) => (
          <Row key={index} className="mb-3">
            {index % 2 === 0 ? (
              <>
                <Col sm="12" md="8" className="bg-light p-0">
                  <div className="d-flex h-100 flex-column justify-content-center">
                    <h5 className="card-title text-danger text-uppercase">
                      {movie.title}
                    </h5>
                    <p>{movie.overview}</p>
                  </div>
                </Col>
                <Col sm="12" md="4" className="p-0">
                  <Image
                    className="img-fluid"
                    src={`${imageUrl}/${movie.backdrop_path}`}
                  />
                </Col>
              </>
            ) : (
              <>
                <Col sm="12" md="4" className="p-0 order-md-1 order-2">
                  <Image
                    className="img-fluid"
                    src={`${imageUrl}/${movie.backdrop_path}`}
                  />
                </Col>
                <Col sm="12" md="8" className="bg-light p-0 order-md-2 order-1">
                  <div className="d-flex h-100 flex-column justify-content-center">
                    <h5 className="card-title text-danger text-uppercase">
                      {movie.title}
                    </h5>
                    <p>{movie.overview}</p>
                  </div>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default AboutUsSection;
