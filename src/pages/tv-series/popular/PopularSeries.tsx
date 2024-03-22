import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Movie } from "../../../types/Movie";
import Search from "../../../components/Search/Search";
import MovieCard from "../../../components/MovieCard/MovieCard";
import { Serie } from "../../../types/Serie";
import SerieCard from "../../../components/SerieCard/SerieCard";

const PopularSeries: React.FC = (): JSX.Element => {
  const [series, setSeries] = useState<Serie[] | null>([]);
  const [filteredSeries, setFilteredSeries] = useState<Serie[] | undefined>([]);

  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

  const getPopularSeries = async (): Promise<Serie[] | any> => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = response.data.results;
      setSeries(data);
      setFilteredSeries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularSeries();
  }, []);

  const handleSearch = (searchValue: string) => {
    let filteredSeries = series?.filter((serie) => {
      return serie.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
    setFilteredSeries(filteredSeries);
  };

  return (
    <Container>
      <Search onSearch={handleSearch} />
      <Row lg={4}>
        {filteredSeries &&
          filteredSeries.map((serie) => (
            <SerieCard key={serie.id} serie={serie} />
          ))}
      </Row>
    </Container>
  );
};

export default PopularSeries;
