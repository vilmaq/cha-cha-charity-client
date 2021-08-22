// import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
// import { UserContext } from "../../context/UserContext";
const NavigationBar = () => {
  // const { state, dispatch} = useContext(UserContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: "100" }}
    >
      <Container>
        <Navbar.Brand href="/">cha-cha-charity</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
          {/* {!currentUser && ( */}
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
          {/* )} */}
          {/* {currentUser && ( */}
          <Nav>
            <Button variant="link" className="nav-link">
              Logout
            </Button>
          </Nav>
          {/* )} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
