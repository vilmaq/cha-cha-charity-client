import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import charityLogo from "../../images/charityLogo.png";

import CategoryMenu from "./CategoryMenu";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: "100" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={charityLogo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events" page="events">
              Events
            </Nav.Link>
          </Nav>
          if (page = "events")
          {
            <Nav>
              <CategoryMenu />
            </Nav>
          }
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="link" className="nav-link">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
