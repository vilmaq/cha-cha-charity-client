import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: 435,
    margin: 20,
    backgroundColor: "#f8cf61",
    padding: 5,
  },
  footer: {
    // padding: 3,
    // width: "100%",
    // textAlign: "center",
    // backgroundColor: "black",
    // color: "white",
    // position: "absolute",
    // bottom: 0,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    textAlign: "center",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p>Copyright &copy; 2021 All Rights Reserved by Cha-Cha-Charity</p>
    </footer>
  );
}
