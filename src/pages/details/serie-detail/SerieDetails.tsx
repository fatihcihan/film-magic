import React, { useEffect, useState } from "react";
import "./SerieDetails.css";
import { useParams } from "react-router-dom";
import { Serie } from "../../../types/Serie";
import axios, { AxiosResponse } from "axios";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import { GoStarFill } from "react-icons/go";
import RelatedMovies from "../../../components/RelatedSeries/RelatedSeries";
import RelatedSeries from "../../../components/RelatedSeries/RelatedSeries";

const SerieDetails = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState<Serie | null>(null);
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;
  const imageUrl = process.env.REACT_APP_IMAGE_URL;

  useEffect(() => {
    const fetchSerieDetails = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const serie = response.data;
        setSerie(serie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSerieDetails();
  }, [id]);

  return (
    <Container fluid className="pt-3 pb-3 text-white background-image">
      <Container>
        <Row>
          <Col md="4">
            <Image
              fluid
              src={`https://image.tmdb.org/t/p/w500${serie?.poster_path}`}
              rounded
            />
          </Col>
          <Col md="8">
            <h2>{serie?.name}</h2>
            <h3 className="tagline"> {serie?.tagline}</h3>
            <h3 className="mt-2">Overview</h3>
            <p style={{ fontSize: "1.5rem" }}>{serie?.overview}</p>
            <div className="movie-subdetails">
              <div className="row">
                <div className="col-6">
                  First Air Date:
                  <span className="movie-metadata">
                    <Badge bg="danger">{serie?.first_air_date}</Badge>
                  </span>
                </div>
                <div className="col-6">
                  Last Air Date:
                  <span className="movie-metadata">
                    <Badge bg="danger">{serie?.last_air_date}</Badge>
                  </span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  Vote Count:
                  <span className="movie-metadata">
                    {" "}
                    <b> {serie?.vote_count} </b>{" "}
                  </span>
                </div>
                <div className="col-6">
                  Vote Average:
                  <span className="movie-metadata">
                    <GoStarFill className="gold-star" />
                    <b> {serie?.vote_average.toFixed(1)}</b>
                  </span>
                </div>
              </div>
              <div className="col-12 text-align-center d-flex mt-3">
                <h3>Genre:</h3>
                <ul>
                  {serie?.genres.map((genre) => (
                    <li className="list-group-item" key={genre.id}>
                      <p style={{ color: "#DC3545" }}>{genre.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        {serie && <RelatedSeries serieId={serie.id} />}
      </Container>
    </Container>
  );
};

export default SerieDetails;
