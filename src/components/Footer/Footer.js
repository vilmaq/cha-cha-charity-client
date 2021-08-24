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
    padding: 3,
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
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
