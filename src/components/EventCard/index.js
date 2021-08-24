import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOn";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import calendar from "./sign-in.png";

import "./eventcard.css";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    width: 405,
    textAlign: "center",
    margin: 30,
  },
  header: {
    backgroundColor: "#f9d9eb",
  },
  links: {
    justifyContent: "center",
  },
});

const EventCard = ({
  id,
  name,
  description,
  day,
  street,
  postcode,
  city,
  country,
  organizer,
  imageUrl,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="event-image"
          height="180"
          image={calendar}
          title="event-image"
        />
        <CardHeader className={classes.header}>
          <Typography gutterBottom variant="h6" component="h2">
            <LocationOnRoundedIcon style={{ color: "#f36b7f" }} />
            <EventRoundedIcon style={{ color: "#9fbfff" }} />
          </Typography>
        </CardHeader>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="h4">
            by {organizer}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.links}>
          <Link>
            <Button size="small" color="primary">
              Sign Up
            </Button>
          </Link>
          <Link href={"/event/" + id}>
            <Button size="small" color="primary">
              See More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default EventCard;
