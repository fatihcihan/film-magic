import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = (): JSX.Element => {
  return (
    <section className="dark-bg" id="hero">
      <Container>
        <Row className="d-flex h-100 flex-column justify-content-center text-light">
          <p className="display-2">The Magic of Cinema at Your Fingers...</p>
          <h1 className="display-3">
            Fil<span className="text-danger">`M`</span>agic
          </h1>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
