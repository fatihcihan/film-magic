import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { SerieGenre } from "../../types/SerieGenre";

const TeamSection = () => {
  const [openGenre, setOpenGenre] = useState<number | null>(null);
  const [genres, setGenres] = useState<SerieGenre[] | null>([]);
  const [selectedGenreData, setSelectedGenreData] = useState<any>(null);
  const buttonColors = ["danger", "warning", "success", "primary"];
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

  const fetchSerieGenres = async (): Promise<void> => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?language=en`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const genres: SerieGenre[] = response.data.genres;
      setGenres(genres);
    } catch (err) {
      console.log("error");
    }
  };

  const fetchSeriesByGenre = async (genreId: number): Promise<void> => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&language=en`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setSelectedGenreData(response.data.results[0]);
      console.log(response.data.results, "data results");
    } catch (err) {
      console.log("error fetching genre details");
    }
  };

  useEffect(() => {
    fetchSerieGenres();
  }, []);

  useEffect(() => {
    if (openGenre !== null) {
      fetchSeriesByGenre(openGenre);
    }
  }, [openGenre]);

  return (
    <div>
      <section id="team" className="generic">
        <Container>
          <h2 className="display-5 text-danger mb-5">THE TEAM</h2>
        </Container>
        <Container fluid>
          <Row>
            {genres?.slice(0, 4).map((genre, index) => (
              <Col sm="6" lg="3" className="p-0" key={genre.id}>
                <div className={`d-grid bg-${buttonColors[index]} py-5`}>
                  <Button
                    className="rounded-0"
                    variant={buttonColors[index]}
                    onClick={() =>
                      setOpenGenre(openGenre === genre.id ? null : genre.id)
                    }
                  >
                    <span className="lead"> {genre.name}</span>
                  </Button>
                  <TeamMemberModal1
                    show={openGenre === genre.id}
                    onHide={() => setOpenGenre(null)}
                    genreData={selectedGenreData}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TeamSection;

function TeamMemberModal1(props: any) {
  const { genreData } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {genreData?.name || "Loading..."}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {genreData ? (
              <>
                <div className="text-center">
                  <Image
                    className="img-fluid"
                    src={`https://image.tmdb.org/t/p/w500${genreData.poster_path}`}
                    style={{
                      maxWidth: "340px",
                      maxHeight: "420px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <h4 className="text-danger lead mt-2 display-5">
                  {genreData.name}
                </h4>
                <p>{genreData.overview}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
