import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";
import "./TestNavbar.css";

const TestNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="color-navbar">
      <Navbar.Brand>
        <h3 className="free">Free Test</h3>
      </Navbar.Brand>
      <Navbar.Brand>
        <Timer />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Navbar className="">
          <Navbar.Brand>
            <h4 className="">1 out of 25</h4>
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <h3 className="mx-4">Home</h3>
          </Navbar.Brand>
          <Navbar.Brand href="/results">
            <Button variant="light">Exit and See The Results</Button>{" "}
          </Navbar.Brand>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TestNavbar;
