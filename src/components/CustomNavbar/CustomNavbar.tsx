import Container from "react-bootstrap/Container";
import "./CustomNavbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const CustomNavbar: React.FC = () => {
  return (
    <>
      <Navbar
        bg="danger"
        expand="lg"
        variant="dark"
        sticky="top"
        className="py-3"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Film Magic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Movie" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/movies/popular">
                  Popular Movie
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/movies/top-rated">
                  Top Rated Movie
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Series" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/tv-series/popular">
                  Popular Series
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tv-series/top-rated">
                  Top Rated Series
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" active>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
