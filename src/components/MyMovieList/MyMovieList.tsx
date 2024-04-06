import React, { useEffect, useState } from "react";
import { Movie } from "../../types/Movie";
import axios, { AxiosResponse } from "axios";
import { Container, Row } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";

export const MyMovieList: React.FC = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;
  const listId = process.env.REACT_APP_MY_LIST_ID;

  const fetchMovies = async () => {
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
      setMovies(movies);
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Container>
        <Row lg={4}>
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </Row>
      </Container>
    </>
  );
};
