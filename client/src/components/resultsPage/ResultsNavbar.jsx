import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ResultsNavbar = () => {
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
        <Navbar.Brand href="/freetest">
          <Button
            variant="light"
            style={{ backgroundColor: "rgb(5, 94, 110)", color: " #b5e2f7" }}
          >
            Return The Test
          </Button>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>

    // <Navbar collapseOnSelect expand="lg" className="color-navbar">
    //   <Navbar.Brand href="/">
    //     <h3 className="free">WebWinners</h3>
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse
    //     id="responsive-navbar-nav"
    //     className="justify-content-start"
    //   >
    //     <Navbar.Brand>
    //       <Nav.Link href="/tutorials">Tutorials</Nav.Link>
    //     </Navbar.Brand>
    //     <Navbar.Brand>
    //       <Nav.Link href="/freetest">The Tests</Nav.Link>
    //     </Navbar.Brand>
    //     <Navbar.Brand>
    //       <Nav.Link href="/contactUs">Contact Us</Nav.Link>
    //     </Navbar.Brand>

    //     <Navbar.Brand href="/results">
    //       <Button
    //         variant="light"
    //         style={{ backgroundColor: "rgb(5, 94, 110)", color: " #b5e2f7" }}
    //       >
    //         Return The Test
    //       </Button>
    //     </Navbar.Brand>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default ResultsNavbar;
