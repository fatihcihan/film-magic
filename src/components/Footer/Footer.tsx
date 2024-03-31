import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container fluid className="bg-danger text-center py-4 lead text-light">
        NO &copy; {currentYear} FILM-MAGIC INC
      </Container>
    </footer>
  );
}

export default Footer;
