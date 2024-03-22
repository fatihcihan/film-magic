import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-body-secondary">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            About
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">
        © {currentYear} Film Magic Inc
      </p>
    </footer>
  );
}

export default Footer;
