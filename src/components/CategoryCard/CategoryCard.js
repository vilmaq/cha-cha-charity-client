import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import animals from "../../assets/images/illustrations/whole-images/deer.png";
import environmental from "../../assets/images/illustrations/whole-images/environment.png";
import arts from "../../assets/images/illustrations/whole-images/painter.png";
import health from "../../assets/images/illustrations/whole-images/healthy.png";
import education from "../../assets/images/illustrations/whole-images/reading.png";
import international from "../../assets/images/illustrations/whole-images/planet.png";

const categoryImages = {
  animals,
  environmental,
  arts,
  health,
  education,
  international,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 435,
    margin: 10,
    backgroundColor: "#f8cf61",
    padding: 5,
  },
  media: {
    paddingTop: "56.25%",
    backgroundColor: "white",
  },
  container: {
    margin: "auto",
    justifyContent: "center",
  },
  btn: {
    color: "#878DC5",
    backgroundColor: "white",
  },
  avatar: {
    backgroundColor: "#f36b7f",
  },
}));

const CategoryCard = ({ title, image }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              CCC
            </Avatar>
          }
          title={<Typography variant="h6">{title}</Typography>}
        />
        <CardMedia
          className={classes.media}
          image={categoryImages[image]}
          title={title}
        />
        <CardActions>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Button
              className={classes.btn}
              variant="contained"
              size="medium"
              disableElevation
            >
              Learn More
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};

export default CategoryCard;
