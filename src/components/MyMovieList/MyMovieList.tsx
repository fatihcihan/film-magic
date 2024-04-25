import React, { useEffect, useState } from "react";
import { Movie } from "../../types/Movie";
import axios, { AxiosResponse } from "axios";
import { Container, Row } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import Search from "../Search/Search";
import HeroSection from "../HeroSection/HeroSection";

export const MyMovieList: React.FC = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[] | undefined>([]);

  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;
  const listId = process.env.REACT_APP_MY_LIST_ID;
  const sessionId = process.env.REACT_APP_SESSION_ID;

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

  // 'https://api.themoviedb.org/3/list/8294803/remove_item?session_id=1d276c6cb1370d32445a736ae1d53a285486a2a3'

  const deleteMovie = async (movie: Movie) => {
    console.log(movie);
    try {
      const response: AxiosResponse<any> = await axios.post(
        `https://api.themoviedb.org/3/list/8294803/remove_item?session_id=${sessionId}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            data: "test",
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (searchValue: string) => {
    let filteredMovies = movies?.filter((movie) => {
      return (
        movie.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
    });
    setFilteredMovies(filteredMovies);
  };

  return (
    <>
      <Container>
        <Search onSearch={handleSearch} />
        <Row md={9}>
          {filteredMovies &&
            filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                deleteMovie={deleteMovie}
              />
            ))}
        </Row>
      </Container>
    </>
  );
};
