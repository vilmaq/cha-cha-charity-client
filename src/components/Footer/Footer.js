import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 435,
    backgroundColor: "#f8cf61",
    padding: 5,
  },
  footer: {
    backgroundColor: "#353535",
    color: "white",
    textAlign: "center",
    padding: "20px 10px",
    height: 70,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.footer}>
      <Typography variant="body1">
        Copyright &copy; 2021 All Rights Reserved by Cha-Cha-Charity
      </Typography>
    </BottomNavigation>
  );
}
