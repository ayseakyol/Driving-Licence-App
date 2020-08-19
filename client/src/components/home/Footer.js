import React from "react";
import { Navbar } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <Navbar
      bg="light"
      variant="footer"
      className="justify-content-center footer"
    >
      <Navbar.Brand style={{ fontSize: "1rem" }}>
        &copy; 2020 WebWinners
      </Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
