import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Image,
  Collapse,
  ListGroup,
  Card,
} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { HiChevronDoubleDown } from "react-icons/hi";
import CloseButton from "react-bootstrap/CloseButton";
import "./ProjectSection.css";
import axios, { AxiosResponse } from "axios";
import { MovieGenre } from "../../types/MovieGenre";
import { Movie } from "../../types/Movie";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const [openGenre, setOpenGenre] = useState<number | null>(null);
  const [genres, setGenres] = useState<MovieGenre[] | null>([]);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;
  const imageUrl = process.env.REACT_APP_IMAGE_URL;

  const imageUrls = [
    "https://images.unsplash.com/photo-1618945524163-32451704cbb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1634912314611-768095c24419?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606145166375-714fe7f24261?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const fetchMovieGenres = async (): Promise<void> => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const genres: MovieGenre[] = response.data.genres;
      setGenres(genres);
    } catch (err) {
      console.log("error");
    }
  };

  const fetchMoviesByGenre = async (genreId: number) => {
    try {
      console.log(genreId);
      const response: AxiosResponse<any> = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const randomizedMovies = response.data.results.sort(
        () => 0.5 - Math.random()
      );
      setMovies(randomizedMovies.slice(0, 3));
    } catch (err) {
      console.log("error fetching movies", err);
    }
  };

  useEffect(() => {
    if (openGenre !== null) {
      fetchMoviesByGenre(openGenre);
    }
  }, [openGenre]);

  useEffect(() => {
    fetchMovieGenres();
  }, []);

  return (
    <section id="latest" className="generic">
      <Container>
        <h2 className="display-5 text-danger mb-4">WHAT WE DO?</h2>
      </Container>
      <Container fluid>
        <Row>
          {genres?.slice(0, 4).map((genre, index) => (
            <Col xl="3" sm="6" className="p-0" key={genre.id}>
              <div className="latest-item">
                <Button
                  onClick={() =>
                    setOpenGenre(openGenre === genre.id ? null : genre.id)
                  }
                  aria-controls="example-collapse-text"
                  aria-expanded={openGenre === genre.id}
                  className="p-0 rounded-0 border-0"
                >
                  <Image src={imageUrls[index % imageUrls.length]} fluid />
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <HiChevronDoubleDown className="chevron-icon" />
                  </div>
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="d-flex flex-wrap">
          {genres?.map((genre) => (
            <Collapse in={openGenre === genre.id} key={genre.id}>
              <Container fluid className="p-0 mt-5">
                <Row className="p-0">
                  <Col sm="6" xl="3" className="d-flex flex-column">
                    <CloseButton
                      onClick={() => {
                        setOpenGenre(null);
                      }}
                    />
                    <dl className="row ps-5 flex-grow-1 d-flex flex-column">
                      <dt className="col-12">
                        <h5 className="text-danger text-uppercase text-center">
                          {genre.name}
                        </h5>
                      </dt>
                      <dd className="col-12 flex-grow-1">
                        {movies ? (
                          <ListGroup>
                            {movies.map((movie) => (
                              <ListGroup.Item key={movie.id}>
                                {movie.title}
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        ) : (
                          <Spinner animation="border" variant="danger" />
                        )}
                      </dd>
                    </dl>
                  </Col>
                  {movies ? (
                    movies.map((movie) => (
                      <Col
                        sm="6"
                        xl="3"
                        className="p-0 d-flex align-items-center"
                      >
                        <Link to={`/movies/details/${movie.id}`}>
                          <Card className="card-img-overlay-container border-0">
                            <Card.Img
                              src={`${imageUrl}/${movie.backdrop_path}`}
                              alt={movie.title}
                              className="card-img"
                            />
                            <Card.ImgOverlay className="card-overlay">
                           Go To Movie Details
                            </Card.ImgOverlay>
                          </Card>
                        </Link>
                      </Col>
                    ))
                  ) : (
                    <Spinner animation="border" variant="danger" />
                  )}
                </Row>
              </Container>
            </Collapse>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectSection;
