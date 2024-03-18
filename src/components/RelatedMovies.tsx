import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function RelatedMovies() {
  const relatedMovies = [1, 2, 3];
  return (
    <Container className="mt-5">
      <h2>Related Movies</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {relatedMovies.map((movie) => (
          <Col key={movie}>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>{movie}</Card.Title>
                <Link to={`/details/${movie}`} className="btn btn-primary">
                  Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RelatedMovies;
