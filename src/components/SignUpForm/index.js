import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Box } from "@material-ui/core";
import { Country, City } from "country-state-city";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },

    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  },
}));

const SignUpForm = ({ handleClose }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postcode, setPostcode] = useState("");
  const [street, setStreet] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [animals, setAnimals] = useState(false);
  const [environmental, setEnvironmental] = useState(false);
  const [international, setInternational] = useState(false);
  const [health, setHealth] = useState(false);
  const [education, setEducation] = useState(false);
  const [artCulture, setArtCulture] = useState(false);
  const [countries] = useState(Country.getAllCountries());
  const [cities, setCities] = useState();
  const [selectedCountryISO, setSelectedCountryISO] = useState("");
  const [selectCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [category, setCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChangeFullName = (event) => {
    setFullName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangePostcode = (event) => {
    setPostcode(event.target.value);
  };

  const onChangeStreet = (event) => {
    setStreet(event.target.value);
  };

  const onChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangeAnimals = (event) => {
    setAnimals(event.target.checked);
  };

  const handleChangeEnvironmental = (event) => {
    setEnvironmental(event.target.checked);
  };

  const handleChangeInternational = (event) => {
    setInternational(event.target.checked);
  };
  const handleChangeHealth = (event) => {
    setHealth(event.target.checked);
  };

  const handleChangeEducation = (event) => {
    setEducation(event.target.checked);
  };

  const handleChangeArtCulture = (event) => {
    setArtCulture(event.target.checked);
  };
  const handleChangeCountry = (event) => {
    setSelectedCountryISO(event.target.value);
    setSelectedCountry(event.currentTarget.getAttribute("name"));
    setCities(City.getCitiesOfCountry(event.target.value));
  };

  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fullName"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="fullName"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "Full name required" }}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Email"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="email"
          />
        )}
        rules={{ required: "Email required" }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Password"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="password"
          />
        )}
        rules={{ required: "Password required" }}
      />
      <Controller
        name="phoneNumber"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="phoneNumber"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="phoneNumber"
          />
        )}
        rules={{ required: "phone number required" }}
      />
      <Controller
        name="street"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="street"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="street"
          />
        )}
        rules={{ required: "street required" }}
      />
      <Controller
        name="postcode"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="postcode"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="postcode"
          />
        )}
        rules={{ required: "postcode required" }}
      />
      <div>
        <Button className={classes.button} onClick={handleOpen}>
          Select the category
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Business</MenuItem>
            <MenuItem value={20}>Volunteer</MenuItem>
            <MenuItem value={30}>Charity</MenuItem>
          </Select>
        </FormControl>
      </div>
      <FormControlLabel
        control={
          <Checkbox
            checked={animals}
            onChange={handleChangeAnimals}
            name="animals"
            color="primary"
          />
        }
        label="Animals"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={environmental}
            onChange={handleChangeEnvironmental}
            name="environmental"
            color="primary"
          />
        }
        label="Environmental"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={international}
            onChange={handleChangeInternational}
            name="international"
            color="primary"
          />
        }
        label="International"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={health}
            onChange={handleChangeHealth}
            name="health"
            color="primary"
          />
        }
        label="Health"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={education}
            onChange={handleChangeEducation}
            name="education"
            color="primary"
          />
        }
        label="ArtCulture"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={artCulture}
            onChange={handleChangeArtCulture}
            name="artCulture"
            color="primary"
          />
        }
        label="artCulture"
      />
      <FormControl>
        <InputLabel>Country</InputLabel>
        <Select value={selectedCountryISO} onChange={handleChangeCountry}>
          {countries.map((country) => {
            return (
              <MenuItem
                name={country.name}
                value={country.isoCode}
                key={country.isoCode}
              >
                {country.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {cities && (
        <Box component="div" m={1}>
          <FormControl style={{ minWidth: "200px" }}>
            <InputLabel>City</InputLabel>
            <Select value={selectedCity} onChange={handleChangeCity}>
              {cities.map((city, index) => {
                return (
                  <MenuItem value={city.name} key={`${city.name}-${index}`}>
                    {city.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      )}
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
