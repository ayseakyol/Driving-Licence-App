import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OneResultPageNavbar = ({ situationNo, testLength }) => {
  return (
    <Navbar className="color-navbar" expand="lg">
      <Navbar.Brand href="/" active>
        <h3 className="free">WebWinners</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/tutorials" style={{ color: "rgb(5, 94, 110)" }}>
            Tutorials
          </Nav.Link>
          <Nav.Link href="/tests" style={{ color: "rgb(5, 94, 110)" }}>
            Take Tests
          </Nav.Link>
          <Nav.Link href="/contactUs" style={{ color: "rgb(5, 94, 110)" }}>
            Contact Us
          </Nav.Link>
        </Nav>
        <Navbar.Brand>
          <h2
            className="nav-position text-center mr-5"
            style={{ fontWeight: "bold" }}
          >
            {situationNo} out of {testLength}
          </h2>
        </Navbar.Brand>
        <Navbar.Brand href="/results">
          <Button
            variant="light"
            style={{ backgroundColor: "rgb(5, 94, 110)", color: " #b5e2f7" }}
          >
            Return The Results
          </Button>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default OneResultPageNavbar;
