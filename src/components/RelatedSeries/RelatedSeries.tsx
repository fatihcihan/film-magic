import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RelatedSerie } from "../../types/RelatedSerie";
import { FaSearch } from "react-icons/fa";
import "./RelatedSeries.css";

interface RelatedSeriesProps {
  serieId: number;
}

const RelatedSeries = ({ serieId }: RelatedSeriesProps) => {
  const [relatedSeries, setRelatedSeries] = useState<RelatedSerie[]>([]);
  const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

  useEffect(() => {
    const fetchRelatedSeries = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          `https://api.themoviedb.org/3/tv/${serieId}/recommendations?language=en-US`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data.results, "series data");
        setRelatedSeries(response.data.results);
      } catch (error) {
        console.error("Error fetching related movies:", error);
      }
    };

    fetchRelatedSeries();
  }, [serieId, accessToken]);

  return (
    <Container className="mt-5">
      <h2 className="display-5 text-danger mb-4">Related Series</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {relatedSeries.map((serie) => (
          <Col key={serie.id}>
            <Card className="related-serie-card">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.title}
                className="related-serie-card-img"
              />
              <Card.Body className="related-serie-card-body">
                <Card.Title className="related-serie-card-title">
                  <h1 className="related-serie-card-title">{serie.name}</h1>
                  <p className="related-serie-card-subtitle">
                    {serie.overview}
                  </p>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RelatedSeries;
