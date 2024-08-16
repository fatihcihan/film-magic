import Container from "react-bootstrap/Container";
import "./CustomNavbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";

const CustomNavbar: React.FC = (): JSX.Element => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  
  return (
    <>
      <Navbar
        bg="dark"
        expand="md"
        variant="dark"
        sticky="top"
        className="py-3"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
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
              <NavDropdown title="My List" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/my-list/movie">
                  My Movie List
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              {isHomePage && (
                <Nav.Link as="button">
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </ScrollLink>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
