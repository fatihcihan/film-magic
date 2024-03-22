import Container from "react-bootstrap/Container";
import "./CustomNavbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const CustomNavbar: React.FC = () => {
  return (
    <Navbar sticky="top" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
         {/*  <img
            src="https://i.imgur.com/iCxOktj.png"
            alt="asd"
            width={40}
            height={40}
            className="d-inline-block align-top"
          /> */}
        </Navbar.Brand>
        <Nav className="me-auto">
          {/*   <Nav.Link as={Link} to="/">
            Home
          </Nav.Link> */}
          <NavDropdown title="Movies">
            <NavDropdown.Item as={Link} to="/">
              Popular
            </NavDropdown.Item>
            {/*  <NavDropdown.Item as={Link} to="/">
              Now Playing
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/">
              Upcoming
            </NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="/movies/top-rated">
              Top Rated
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="TV Series">
            <NavDropdown.Item as={Link} to="/tv-series/popular">
              Popular
            </NavDropdown.Item>
            {/* <NavDropdown.Item as={Link} to="/">
              Airing Today
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/">
              On TV
            </NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="tv-series/top-rated">
              Top Rated
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/create">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
