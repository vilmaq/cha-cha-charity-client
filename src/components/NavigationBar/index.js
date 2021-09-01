import React from "react";
import { useMediaQuery } from "react-responsive";
import { MOBILE_BREAKPOINT } from "../../mediaQueries";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Link, Toolbar, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useUserContext } from "../../contexts/UserProvider";
import CategoryMenu from "./CategoryMenu";
import charityLogo from "../../assets/images/charityLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "yellow",
  },
  navbar: {
    backgroundColor: "#353535",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  navButton: {
    color: "white",
    "&:hover": {
      color: "#D3D9D9",
    },
  },
  endNavs: { position: "absolute", right: 40 },
  expButton: {
    color: "black",
    "&:hover": {
      color: "#D3D9D9",
    },
  },
  dropMenu: {
    color: "black",
  },
}));

const NavigationBar = () => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const classes = useStyles();
  const { state, dispatch } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        {isMobile ? (
          <Toolbar>
            <img
              src={charityLogo}
              alt="logo"
              style={{ width: "60px", height: "60px" }}
            />
            <Button
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              className={classes.dropMenu}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                {state.user ? (
                  <Link color="inherit" href="/dashboard">
                    Home
                  </Link>
                ) : (
                  <Link color="inherit" href="/">
                    Home
                  </Link>
                )}
              </MenuItem>
              {state.user ? (
                <>
                  <MenuItem>
                    <Link color="inherit" onClick={handleLogout}>
                      Logout
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem>
                    <Link color="inherit" href="/login">
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/signup">Sign Up</Link>
                  </MenuItem>
                </>
              )}
            </Menu>
            <CategoryMenu />
          </Toolbar>
        ) : (
          <Toolbar>
            <img
              src={charityLogo}
              alt="logo"
              style={{ width: "60px", height: "60px" }}
            />

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

            {state.user ? (
              <div className={classes.endNavs}>
                <Button
                  className={classes.navButton}
                  color="inherit"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className={classes.endNavs}>
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
              </div>
            )}
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};
export default NavigationBar;
