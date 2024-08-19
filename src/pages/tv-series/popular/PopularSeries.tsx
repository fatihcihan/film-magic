import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Search from "../../../components/Search/Search";
import { Serie } from "../../../types/Serie";
import SerieCard from "../../../components/SerieCard/SerieCard";
import { Col } from "react-bootstrap";

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
      <Row xs={1} sm={2} md={3} lg={4}>
        {filteredSeries &&
          filteredSeries.map((serie) => (
            <Col key={serie.id}>
              <SerieCard key={serie.id} serie={serie} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default PopularSeries;
