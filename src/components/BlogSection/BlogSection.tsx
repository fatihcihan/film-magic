import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { LuClock } from "react-icons/lu";
import { MdOutlineInsertComment } from "react-icons/md";
import { Movie } from "../../types/Movie";
import { BsCalendar3 } from "react-icons/bs";
import axios, { AxiosResponse } from "axios";
import "./BlogSection.css";
import { GoStarFill } from "react-icons/go";
import React from "react";

const BlogSection = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[] | undefined>([]);

  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;
  const listId = process.env.REACT_APP_MY_LIST_ID;
  const sessionId = process.env.REACT_APP_SESSION_ID;
  const imageUrl = process.env.REACT_APP_IMAGE_URL;

  const fetchMovies = async (): Promise<void> => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://api.themoviedb.org/3/list/${listId}?language=en-US&page=1`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const movies: Movie[] = response.data.items;
      movies.sort((a, b) => {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
      setMovies(movies);
      setFilteredMovies(movies);
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section id="blog" className="generic">
      <Container>
        <h2 className="display-5 text-danger mb-5">WHAT WE SAY?</h2>
        <Row>
          {movies?.slice(0, 3).map((movie, index) => (
              <Col key={index} md="6" lg="4">
                <Card className="bg-light border-0">
                  <Card.Img
                    variant="top"
                    src={`${imageUrl}/${movie.backdrop_path}`}
                  ></Card.Img>
                  <Card.Body>
                    <h5 className="card-title text-danger text-uppercase">
                      {movie.title}
                    </h5>
                    <Card.Text>{movie.overview}</Card.Text>
                    <ul className="list-inline d-flex justify-content-between">
                      <li className="list-inline-item">
                        <small className="text-muted">
                          <BsCalendar3 className="me-2" />
                          {movie.release_date}
                        </small>
                      </li>
                      <li className="list-inline-item">
                        <small className="text-muted">
                          <GoStarFill /> {movie.vote_average.toFixed(1)}
                        </small>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
          ))}
          <Col md="6" lg="4" className="d-none d-md-block d-lg-none">
            <Card className="bg-light border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
              ></Card.Img>
              <Card.Body>
                <h5 className="lead text-uppercase text-danger mb-4">
                  5 OUTRAGEOUS IDEAS FOR YOUR TECHNOLOGCY
                </h5>
                <h6 className="card-title text-danger text-uppercase">
                  ARMANDA DIEGO
                </h6>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus ipsa fugiat eius provident ducimus consectetur
                  adipisci et doloribus. Maiores?
                </Card.Text>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <LuClock /> 2 Days Ago |
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <MdOutlineInsertComment /> 10
                    </small>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;

{
  /*  <Col md="6" lg="4">
            <Card className="bg-light border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
              ></Card.Img>
              <Card.Body>
                <h5 className="lead text-uppercase text-danger mb-4">
                  5 OUTRAGEOUS IDEAS FOR YOUR TECHNOLOGCY
                </h5>
                <h6 className="card-title text-danger text-uppercase">
                  ARMANDA DIEGO
                </h6>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus ipsa fugiat eius provident ducimus consectetur
                  adipisci et doloribus. Maiores?
                </Card.Text>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <LuClock /> 2 Days Ago |
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <MdOutlineInsertComment /> 10
                    </small>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>      
          <Col md="6" lg="4" className="d-none d-md-block d-lg-none">
            <Card className="bg-light border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
              ></Card.Img>
              <Card.Body>
                <h5 className="lead text-uppercase text-danger mb-4">
                  5 OUTRAGEOUS IDEAS FOR YOUR TECHNOLOGCY
                </h5>
                <h6 className="card-title text-danger text-uppercase">
                  ARMANDA DIEGO
                </h6>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus ipsa fugiat eius provident ducimus consectetur
                  adipisci et doloribus. Maiores?
                </Card.Text>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <LuClock /> 2 Days Ago |
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <MdOutlineInsertComment /> 10
                    </small>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col> */
}
