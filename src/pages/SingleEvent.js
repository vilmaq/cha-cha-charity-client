// import { useQuery } from "@apollo/client";
// import { useParams } from "react-router";
// import { EVENT } from "../graphql/queries";
//import LoaderSpinner from "../components/Loader/LoaderSpinner";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//icons
import LocationOnRoundedIcon from "@material-ui/icons/LocationOn";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";

import "./singleevent.css";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  // top header
  signUpButton: {},
  eventName: {
    color: "#f0f0f0",
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  },
  // info header
  infoHeader: {
    backgroundColor: "yellow",
    display: "flex",
    padding: 25,
    margin: "auto",
    justifyContent: "space-around",
  },
  infoDivs: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
  },
  mainGrid: {
    marginTop: 20,
    paddingBottom: 50,
  },
  eventDescription: {
    backgroundColor: "#eceae9",
    padding: 30,
  },
  eventSidebar: {
    backgroundColor: "#eceae9",
    padding: 20,
  },
  // attendants
  attendTitle: {
    backgroundColor: "#82b5a5",
  },
  attendants: {
    backgroundColor: "#eceae9",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
}));

const SingleEvent = () => {
  const classes = useStyles();
  // const { eventId } = useParams();
  // const { data, loading, error } = useQuery(EVENT, {
  //   variables: { eventId },
  // });
  // if (loading) {
  //   return <div>Loading</div>;
  // }
  // if (error) {
  //   console.log(error);
  //   return <div>error!!</div>;
  // }

  // console.log(data.event.participants);
  return (
    <div className={classes.root}>
      <section className={"header-container"}>
        <header
          className="header-img"
          // style={{
          //   backgroundImage: `url(${data.event.imageUrl})`,
          // }}
        ></header>
        <div className={classes.eventName}>
          <h1>Data{/* {data.event.name} */}</h1>

          {/* this button will save the event for the user to my events */}

          <Button variant="contained" color="secondary" href="/signupfor">
            Sign Up
          </Button>
        </div>
      </section>
      <Container>
        <div>
          <Grid>
            <Paper className={classes.infoHeader}>
              <div className={classes.infoDivs}>
                <LocationOnRoundedIcon
                  fontSize="large"
                  style={{ color: "#f36b7f" }}
                />
                <Typography className={classes.infoText} variant="h5">
                  day{/*  {data.event.day} */}
                </Typography>
              </div>
              <div className={classes.infoDivs}>
                <AccessTimeRoundedIcon
                  fontSize="large"
                  style={{ color: "#9fbfff" }}
                />
                <Typography className={classes.infoText} variant="h5">
                  day{/* {data.event.day} */}
                </Typography>
              </div>
              <div className={classes.infoDivs}>
                <EventRoundedIcon
                  fontSize="large"
                  style={{ color: "#f36b7f" }}
                />
                <Typography className={classes.infoText} variant="h5">
                  city{/* {data.event.city} */}
                </Typography>
              </div>
              <div className={classes.infoDivs}>
                <PeopleRoundedIcon
                  fontSize="large"
                  style={{ color: "#82b5a5" }}
                />
                <Typography className={classes.infoText} variant="h5">
                  35 Participants
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid container spacing={3} className={classes.mainGrid}>
            <Grid item xs={9}>
              <Paper className={classes.eventDescription}>
                <Typography>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                  {/* {data.event.description} */}
                </Typography>
              </Paper>
              <Paper>
                <article className={classes.attendTitle}>
                  <Typography variant="h6">
                    See some of the people who are attending this event!
                  </Typography>
                </article>
                <article className={classes.attendants}>
                  <div>
                    <FaceRoundedIcon
                      fontSize="large"
                      style={{ color: "#82b5a5" }}
                    />
                  </div>
                  <div>
                    <FaceRoundedIcon
                      fontSize="large"
                      style={{ color: "#82b5a5" }}
                    />
                  </div>
                  <div>
                    <FaceRoundedIcon
                      fontSize="large"
                      style={{ color: "#82b5a5" }}
                    />
                  </div>
                </article>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.eventSidebar}>
                <div>
                  <Typography>Hosted by</Typography>
                  <Typography>
                    bla bla{/* {data.event.organizer}  */}
                  </Typography>
                  <Typography>_______</Typography>
                  <Typography>bla bla{/* {data.event.city} */}</Typography>
                  <Typography>bla bla{/* {data.event.street} */}</Typography>
                  <Typography>bla bla{/* {data.event.postcode} */}</Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default SingleEvent;
