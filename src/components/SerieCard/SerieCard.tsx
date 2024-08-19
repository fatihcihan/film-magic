import React from "react";
import { Serie } from "../../types/Serie";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import "./SerieCard.css";
import { ImWarning } from "react-icons/im";

function SerieCard(props: { serie: Serie }) {
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const { serie } = props;

  const shortenOverview = (overview: string, maxLength: number) => {
    if (overview && overview.length <= maxLength) {
      return overview;
    } else if (overview) {
      return overview.slice(0, maxLength - 3) + "...";
    } else {
      return (
        <>
          <div className="overview-warning">
            <ImWarning />
            <b> No overview available. </b>
          </div>
        </>
      );
    }
  };

  return (
    <Container className="mt-2">
      <Row className="g-4">
        <Col key={serie.id}>
          <Card className="test-serie-card">
            <Card.Link as={Link} to={`details/${serie.id}`}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.title}
                className="test-serie-card-img"
              />
              <Card.Body className="test-serie-card-body">
                <Card.Title className="test-serie-card-title">
                  <h1 className="test-serie-card-title">{serie.name}</h1>
                  <p className="test-serie-card-subtitle">{serie.overview}</p>
                </Card.Title>
              </Card.Body>
            </Card.Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SerieCard;
