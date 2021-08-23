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
          <Link href="/event">
            <Button size="small" color="primary">
              See More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

// const EventCar = ({
//   name,
//   description,
//   day,
//   street,
//   postcode,
//   city,
//   country,
//   organizer,
//   imageUrl,
// }) => {
//   return (
//     <article className="event-card-container">
//       <div className="img-container">
//         <figure>
//           <img
//             className="img"
//             src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80eUrl"
//             alt="Event"
//           />
//         </figure>
//       </div>
//       <div className="info-container">
//         <section className="name">
//           <h4>{name}</h4>
//         </section>

//         <section className="description">{description}</section>
//         <section className="when-where">
//           <div className="details">
//             <img src={calendar} alt="calendar" height="24px" />
//             <text>{day}</text>
//           </div>

//           <div className="details">
//             <img src={location} alt="location" height="24px" />
//             <text>{city}</text>
//           </div>
//         </section>

//         <section>
//           <div className="buttonContainer">
//             <a href="/signupfor">
//               <button type="button" className="buttons">
//                 Sign Up
//               </button>
//             </a>
//             <a href="/event">
//               <button type="button" className="buttons">
//                 See more
//               </button>
//             </a>
//           </div>
//         </section>
//       </div>
//     </article>
//   );
// };
export default EventCard;
