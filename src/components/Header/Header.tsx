import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import CustomNavbar from "../CustomNavbar/CustomNavbar";

const Header: React.FC = () => {
  return (
    <header>
      <CustomNavbar />
    </header>
  );
};

export default Header;
