import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

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

  console.log(data);

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
        <Grid container sm={12}>
          <Grid xs={6} sm={8} className={classes.events}>
            <Paper className={classes.myEvent}>
              <div>
                <EventCard />
              </div>
              <div>
                <EventCard />
              </div>
              <div>
                <EventCard />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Grid>
              <Paper className={classes.myInfo}>
                <Card>
                  <CardContent>
                    <Typography>
                      My Info
                      <EditRoundedIcon marginLeft="5px" />
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    alt="event-image"
                    height="180"
                    image={example}
                    title="event-image"
                  />
                  <CardContent className={classes.details}>
                    <Typography variant="h5">Bob Mortimer</Typography>
                    <Typography variant="h6">Phone number</Typography>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="h6">Bio</Typography>
                    <Typography variant="h6">Interests</Typography>
                  </CardContent>
                </Card>
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
