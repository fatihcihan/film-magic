import React from "react";
import { Serie } from "../../types/Serie";
import { Button, Card } from "react-bootstrap";
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
          <br />
          <div className="overview-warning">
            <ImWarning />
            <b> No overview available. </b>
            <br />
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Card className="bg-light border-0 col-sm-6 col-lg-3">
        <Card.Img variant="top" src={`${imageUrl}/${serie.poster_path}`} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-4">{serie.name}</Card.Title>
          <Card.Text className="info">{shortenOverview(serie.overview, 100)}</Card.Text>
          <div className="d-flex justify-content-between">
            <Card.Link as={Link} to={`details/${serie.id}`}>
              <Button variant="outline-primary" size="lg">
                Details
              </Button>
            </Card.Link>
            <Card.Title className="p-2">
              <span>
                <GoStarFill className="gold-star" />
                {serie.vote_average.toFixed(1)}
              </span>
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SerieCard;
