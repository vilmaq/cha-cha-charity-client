import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function EventForm({ stepOneActions, stepOneData }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Event Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stepOneData.eventName}
            onChange={(event) =>
              stepOneActions.setEventName(event.target.value)
            }
            required
            id="name"
            name="name"
            label="Event Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker"
                label="Date picker"
                value={stepOneData.eventDate}
                onChange={(date, value) => {
                  stepOneActions.setEventDate(value);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                inputValue={stepOneData.eventTime}
                onChange={(date, value) => {
                  stepOneActions.setEventTime(value);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="space-between">
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={stepOneData.eventType}
              onChange={(event) =>
                stepOneActions.setEventType(event.target.value)
              }
              autoWidth
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value="Animals">Animals</MenuItem>
              <MenuItem value="Health">Health</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Art/Culture">Art/Culture</MenuItem>
              <MenuItem value="Environmental">Environmental</MenuItem>
              <MenuItem value="International">International</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={stepOneData.eventDescription}
            required
            id="description"
            name="description"
            label="Description"
            onChange={(event) =>
              stepOneActions.setEventDescription(event.target.value)
            }
            fullWidth
            autoComplete="Event Description"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stepOneData.eventStreet}
            id="street"
            name="street"
            label="Street"
            fullWidth
            autoComplete="address-line2"
            onChange={(event) =>
              stepOneActions.setEventStreet(event.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stepOneData.eventCity}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="address-level2"
            onChange={(event) =>
              stepOneActions.setEventCity(event.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stepOneData.eventPostCode}
            required
            id="postcode"
            name="postcode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="postal-code"
            onChange={(event) =>
              stepOneActions.setEventPostCode(event.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stepOneData.eventCountry}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
            onChange={(event) =>
              stepOneActions.setEventCountry(event.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stepOneData.eventOrganizer}
            required
            id="organizer"
            name="organizer"
            label="Organizer Name"
            fullWidth
            autoComplete="Organizer Name"
            onChange={(event) =>
              stepOneActions.setEventOrganizer(event.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
