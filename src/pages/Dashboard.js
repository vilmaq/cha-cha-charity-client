import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

import example from "../assets/images/illustrations/whole-images/pablo-201.png";
import EventCard from "../components/EventCard";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f9d9eb",
  },
  header: {
    backgroundColor: "#353535",
    color: "white",
  },
  title: {
    textAlign: "center",
  },
  myEvent: {
    backgroundColor: "yellow",
  },
  details: {
    textAlign: "center",
  },
});

const Dashboard = (params) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title} variant="h3">
          Dashboard
        </Typography>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.title} variant="h5">
                My Events
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
              My Events
              <div className={classes.myEvent}>
                <EventCard />
                <EventCard />
                <EventCard />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
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
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Dashboard;
