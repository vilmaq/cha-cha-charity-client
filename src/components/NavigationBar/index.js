import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";

// material-ui

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { useUserContext } from "../../contexts/UserProvider";
import CategoryMenu from "./CategoryMenu";
import charityLogo from "../../images/charityLogo.png";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#353535",
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  const { state, dispatch } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <IconButton className={classes.title}>
              <img
                src={charityLogo}
                alt="logo"
                style={{ width: "40px", height: "40px" }}
              />
            </IconButton>
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ zIndex: "100" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={charityLogo}
              alt="logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/events/all" page="events">
                Events
              </Nav.Link>

              {state.user ? (
                <Button
                  variant="link"
                  className="nav-link"
                  onClick={handleLogout}
                  style={{ textAlign: "left" }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </>
              )}
            </Nav>
            <CategoryMenu />
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
};
export default NavigationBar;
