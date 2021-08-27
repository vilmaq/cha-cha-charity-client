import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import MainContainer from "../components/MainContainer";
import { useMediaQuery } from "react-responsive";
import { MOBILE_BREAKPOINT } from "../mediaQueries";

import example from "../assets/images/illustrations/whole-images/pablo-201.png";
import EventCard from "../components/EventCard";
import { useQuery } from "@apollo/client";
import { MY_EVENTS } from "../graphql/queries";
import { useUserContext } from "../contexts/UserProvider";

const useStyles = makeStyles((theme) => ({
  root: { margin: "auto" },
  paper: {
    margin: 15,
    backgroundColor: "#f9d9eb",
    padding: theme.spacing(2),
  },
  title: {
    textAlign: "center",
  },
  events: {},
  myEvent: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#f8cf61",
  },
  myInfo: {
    backgroundColor: "#f8cf61",
    padding: theme.spacing(2),
    textAlign: "center",
    margin: 10,
  },
  details: {
    textAlign: "center",
  },
  createEvent: {
    backgroundColor: "#f9d9eb",
    padding: theme.spacing(2),
    textAlign: "center",
    margin: 10,
  },
}));

const Dashboard = () => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const classes = useStyles();
  const { state } = useUserContext();

  const { data, loading, error } = useQuery(MY_EVENTS, {
    variables: {
      eventsCreatorId: state.user.id,
      eventsCategory: "all",
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Container className={classes.root}>
      <div>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5">
              My Events
            </Typography>
          </Paper>
        </Grid>
        <Grid container>
          <Grid className={classes.events}>
            <MainContainer maxWidth={isMobile ? "sm" : "md"}>
              {data.events &&
                data.events.map((event) => (
                  <EventCard
                    id={event.id}
                    key={event.id}
                    name={event.name}
                    description={event.description}
                    day={event.day}
                    street={event.street}
                    postcode={event.postcode}
                    city={event.city}
                    country={event.country}
                    organizer={event.organizer}
                    creator={event.creator}
                    imageUrl={event.imageUrl}
                  />
                ))}
            </MainContainer>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Grid>
              <Paper className={classes.myInfo}>
                {data.events.map((event) => (
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1">
                        My Info
                        <EditRoundedIcon />
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      alt="event-image"
                      height="250"
                      image={event.creator.imageUrl}
                      title="event-image"
                    />
                    <CardContent className={classes.details}>
                      <Typography variant="h5">
                        {event.creator.fullName}
                      </Typography>
                      <Typography variant="h6">
                        {event.creator.phoneNumber}
                      </Typography>
                      <Typography variant="h6">{event.creator.city}</Typography>
                      <Typography variant="h6">
                        {event.creator.country}
                      </Typography>
                      <Typography variant="subtitle2">
                        {event.creator.bio}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Paper>
            </Grid>

            <Grid>
              <Paper className={classes.createEvent}>
                <Typography variant="h5" style={{ color: "#353535" }}>
                  Create Event(?)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Dashboard;
