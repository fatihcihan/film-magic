import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import "./Popular.css";
import { Movie } from "../../../types/Movie";
import Search from "../../../components/Search/Search";
import MovieCard from "../../../components/MovieCard/MovieCard";

const PopularMovies: React.FC = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[] | undefined>([]);

  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

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
      setFilteredMovies(data);
    } catch (error) {
      console.error(error);
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
    <Container>
      <Search onSearch={handleSearch} />
      <Row lg={4}>
        {filteredMovies &&
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </Row>
    </Container>
  );
};

export default PopularMovies;
