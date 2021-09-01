import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useUserContext } from "../../contexts/UserProvider";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import NewEventData from "./NewEventData";
import UploadImage from "./UploadImage";
import TermsAndConditions from "./TermsAndConditions";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import ImageUpload from "../ImageUpload";

import { CREATEEVENT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
// import MomentUtils from "@date-io/moment";
import moment from "moment";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" © "}
      <Link color="inherit" href="https://material-ui.com/">
        Cha-Cha-Charity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Event Form", "Image Upload", "Terms & Conditions"];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <NewEventData />;
//     case 1:
//       return <UploadImages />;
//     case 2:
//       return <TermsAndConditions />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

export default function CreateNewEvent() {
  const { state } = useUserContext();
  let history = useHistory();

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const today = new Date();
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState(`${today}`);
  const [eventTime, setEventTime] = useState(
    `${moment(today).format("HH:mm A")}`
  );
  const [eventDescription, setEventDescription] = useState("");
  const [eventStreet, setEventStreet] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventPostCode, setEventPostCode] = useState("");
  const [eventCountry, setEventCountry] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [hasReadTermAndConditions, setHasReadTermsAndConditions] =
    useState(false);
  const [disabled, setDisabled] = useState(false);

  const stepOneActions = {
    setEventName,
    setEventType,
    setEventDate,
    setEventTime,
    setEventDescription,
    setEventStreet,
    setEventCity,

    setEventPostCode,
    setEventCountry,
    setEventOrganizer,
  };
  const stepOneData = {
    eventName,
    eventType,
    eventDate,
    eventTime,
    eventDescription,
    eventStreet,
    eventCity,

    eventPostCode,
    eventCountry,
    eventOrganizer,
  };

  const stepTwoActions = {
    // setEventImage,
    setImages,
    setImageUrl,
  };

  const stepTwoData = {
    imageUrl,
  };
  const stepThreeActions = {
    setHasReadTermsAndConditions,
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [createEvent] = useMutation(CREATEEVENT, {
    onCompleted: (data) => {
      history.push(`event/${data.createEvent.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleNext = async () => {
    if (activeStep + 1 < 3) setActiveStep(activeStep + 1);
    if (activeStep === 2) {
      console.log(imageUrl);
      const { data } = await createEvent({
        variables: {
          eventInput: {
            type: eventType,
            name: eventName,
            description: eventDescription,
            day: eventDate,
            time: eventTime,
            street: eventStreet,
            postcode: eventPostCode,
            city: eventCity,
            country: eventCountry,
            organizer: eventOrganizer,
            imageUrl: imageUrl,
            creator: state.user.id,
          },
        },
      });
      console.log(data);
    }
  };

  // if (activeStep === 2 && hasReadTermAndConditions === false) {
  //   setDisabled(true);
  // }

  const getFormStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <NewEventData
            stepOneActions={stepOneActions}
            stepOneData={stepOneData}
          />
        );
      case 1:
        return (
          <div>
            <ImageUpload
              images={images}
              imageUrl={imageUrl}
              setImages={setImages}
              setImageUrl={setImageUrl}
              filePrefix=""
            />
          </div>
        );
      case 2:
        return <TermsAndConditions stepThreeActions={stepThreeActions} />;
      default:
        return null;
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Cha-Cha-Charity
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create new Event
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  New Event created.
                </Typography>
                <Typography variant="subtitle1">
                  <Button
                    className="btn-upload"
                    color="primary"
                    variant="contained"
                    component="span"
                    onClick={this.upload}
                  >
                    View Event
                  </Button>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getFormStep()}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={
                      activeStep === 2 && hasReadTermAndConditions === false
                    }
                  >
                    {activeStep === steps.length - 1 ? "Create Event" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
