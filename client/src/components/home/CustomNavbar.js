import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginComponent";

const CustomNavbar = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "rgba(55, 61, 73, 0.975)",
        marginBottom: "200px",
      }}
      expand="lg"
      fixed="top"
      variant="dark"
      className="mb-5"
    >
      <Navbar.Brand href="/" active>
        <Image src="/assets/logo2.png" height="50vh" width="50vw" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/tutorials">Tutorials</Nav.Link>
          <Nav.Link href="/drivingTips">Driving Tips</Nav.Link>
          <Nav.Link href="/tests">Take Tests</Nav.Link>
          <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        </Nav>
        <LoginForm />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
