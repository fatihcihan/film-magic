import React, { useEffect, useState } from "react";
import { Serie } from "../../../types/Serie";
import axios, { AxiosResponse } from "axios";
import { Container, Row } from "react-bootstrap";
import Search from "../../../components/Search/Search";
import SerieCard from "../../../components/SerieCard/SerieCard";

const TopRatedSeries: React.FC = (): JSX.Element => {
  const [series, setSeries] = useState<Serie[] | null>([]);
  const [filteredSeries, setFilteredSeries] = useState<Serie[] | undefined>([]);

  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

  const getTopRatedSeries = async (): Promise<Serie[] | any> => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
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
      console.error(error);
    }
  };

  useEffect(() => {
    getTopRatedSeries();
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
      <Row lg={9}>
        {filteredSeries &&
          filteredSeries.map((serie) => (
            <SerieCard key={serie.id} serie={serie} />
          ))}
      </Row>
    </Container>
  );
};

export default TopRatedSeries;
