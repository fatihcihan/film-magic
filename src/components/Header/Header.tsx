import React from "react";
import "./Header.css";
import CustomNavbar from "../CustomNavbar/CustomNavbar";

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <CustomNavbar />
    </header>
  );
};

export default Header;
