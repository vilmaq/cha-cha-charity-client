import React from "react";

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
  root: {},
  navbar: {
    backgroundColor: "#353535",
  },
  navButton: {
    color: "white",
    "&:hover": {
      color: "#D3D9D9",
    },
  },
  signNav: {
    position: "absolute",
    right: 30,
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
        <Toolbar className={classes.tool}>
          <IconButton
            color="inherit"
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link>
            <img
              src={charityLogo}
              alt="logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Link>

          {state.user ? (
            <Button
              className={classes.navButton}
              color="inherit"
              href="/dashboard"
            >
              Home
            </Button>
          ) : (
            <Button className={classes.navButton} color="inherit" href="/">
              Home
            </Button>
          )}
          <Button color="inherit">See Events:</Button>
          <CategoryMenu />
          <div className={classes.signNav}>
            {state.user ? (
              <Button
                className={classes.navButton}
                color="inherit"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  className={classes.navButton}
                  color="inherit"
                  href="/login"
                >
                  Login
                </Button>
                <Button
                  className={classes.navButton}
                  color="inherit"
                  href="/signup"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavigationBar;
