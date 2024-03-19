import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Movie } from "../../types/Movie";
import axios, { AxiosResponse } from "axios";

const TopRated: React.FC = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

  const fetchMovies = async () => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = response.data.results;
      console.log(data, "top rated movie");
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      <Row lg={4}>
        {movies?.map((movie) => (
          <div>{movie.title}</div>
        ))}
      </Row>
    </Container>
  );
};

export default TopRated;
