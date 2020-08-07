import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DrivingNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="color-navbar"
      bg="info"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <h3 className="free" style={{ color: "white" }}>
          WebWinners
        </h3>
      </Navbar.Brand>
      {/* <Navbar.Brand>
        <SignUp />
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Navbar>
          <Navbar.Brand href="/freetest">
            <Button variant="light">Go To The Tests</Button>{" "}
          </Navbar.Brand>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DrivingNavbar;
