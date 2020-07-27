import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";
import "./TestNavbar.css";

const TestNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Navbar.Brand>
        <h3 className="free">Free Test</h3>
      </Navbar.Brand>
      <Navbar.Brand>
        <Timer />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar className="mr-auto">
          <Navbar.Brand>
            <h4 className="mx-5">1 out of 10</h4>
          </Navbar.Brand>
        </Navbar>
        <Navbar>
          <Navbar.Brand>
            <Button variant="light">Exit and See The Results</Button>{" "}
          </Navbar.Brand>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TestNavbar;
