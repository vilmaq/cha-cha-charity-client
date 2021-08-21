import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Country, City } from "country-state-city";
import { useUserContext } from "../../contexts/UserProvider";

import "./SignUpForm.css";
import { SIGNUP } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },

  formControl: {
    display: "flex",
    margin: theme.spacing(3),
    minWidth: 120,
  },
}));

const SignUpForm = () => {
  // let history = useHistory();

  // const { dispatch } = useUserContext();

  const classes = useStyles();
  // const { dispatch } = useUserContext();

  /*   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    street: "",
    animals: false,
    educational: false,
    health: false,
    artCulture: false,
    environmental: false,
    international: false,
  });

  const countries = Country.getAllCountries();
  const [cities, setCities] = useState();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [preferences, setPreferences] = useState({
    animals: false,
    environmental: false,
    health: false,
    education: false,
    international: false,
    artCulture: false,
  });

  const [open, setOpen] = React.useState(false);

  const handleChangeCountry = (event) => {
    const isoCode = event.currentTarget.getAttribute("name");
    const cities = City.getCitiesOfCountry(isoCode);
    const countryName = event.target.value;
    setSelectedCountry(countryName);
    setCities(cities);
  };

  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleChangeType = (event) => {
    setSelectedType(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSelectClose = () => {
    setOpen(false);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheck = (event) => {
    const { name, checked } = event.target;
    setPreferences({
      ...preferences,
      [name]: checked,
    });
  };

  const [signup] = useMutation(SIGNUP, {
    // onCompleted: (data) => {
    //   const payload = {
    //     token: data.login.token,
    //     email: data.login.user.email,
    //     firstName: data.login.user.firstName,
    //     lastName: data.login.user.lastName,
    //     id: data.login.user.id,
    //   };
    //   // localStorage.setItem("user", JSON.ify(payload));
    //   // dispatch({
    //   //   type: "SIGNUP",
    //   //   payload,
    //   // });
    //   // history.push("/");
    // },
  });

  const handleSubmit = async (formData) => {
    console.log(formValues);
    console.log(selectedCountry, selectedCity);
    console.log(selectedType);
    console.log(preferences);
    const userData = {
      // id: ID,
      type: formData.type,
      fullName: formData.fullName,
      password: formData.password,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      street: formData.street,
      postcode: formData.postcode,
      city: formData.city,
      country: formData.country,
      animals: formData.animals,
      environmental: formData.environmental,
      international: formData.international,
      health: formData.health,
      education: formData.education,
      artCulture: formData.artCulture,
    };
    await signup({
      variables: {
        signUpInput: userData,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="fullName"
        name="fullName"
        onChange={(event) => onChange(event)}
        fullWidth
        autocomplete="none"
      />
      <TextField
        label="email"
        name="email"
        onChange={(event) => onChange(event)}
        fullWidth
        autocomplete="none"
      />
      <TextField
        label="password"
        name="password"
        type="password"
        onChange={(event) => onChange(event)}
        fullWidth
        autocomplete="none"
      />
      <TextField
        label="phoneNumber"
        name="phoneNumber"
        onChange={(event) => onChange(event)}
        fullWidth
        autocomplete="none"
      />
      <TextField
        label="street"
        name="street"
        onChange={(event) => onChange(event)}
        fullWidth
        autocomplete="none"
      />
      <TextField
        label="Message"
        fullWidth
        multiline
        rows={5}
        autocomplete="none"
      />
      <FormControl>
        <InputLabel>Country</InputLabel>
        <Select
          value={selectedCountry}
          name="country"
          onChange={(event) => {
            handleChangeCountry(event);
          }}
        >
          {countries.map((country) => {
            return (
              <MenuItem
                name={country.isoCode}
                value={country.name}
                key={country.isoCode}
              >
                {country.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {cities && (
        <FormControl style={{ minWidth: "200px" }}>
          <InputLabel>City</InputLabel>
          <Select
            value={selectedCity}
            name="city"
            onChange={(event) => {
              handleChangeCity(event);
            }}
          >
            {cities.map((city, index) => {
              return (
                <MenuItem value={city.name} key={`${city.name}-${index}`}>
                  {city.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
      <div>
        <Button className={classes.button} onClick={handleOpen}>
          Select the type
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleSelectClose}
            onOpen={handleOpen}
            value={selectedType.type}
            name="type"
            onChange={(event) => {
              handleChangeType(event);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Business"}>Business</MenuItem>
            <MenuItem value={"Volunteer"}>Volunteer</MenuItem>
            <MenuItem value={"Charity"}>Charity</MenuItem>
          </Select>
        </FormControl>
      </div>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={preferences.animals}
              onChange={(event) => onCheck(event)}
              name="animals"
              color="primary"
            />
          }
          label="Animals"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={preferences.environmental}
              onChange={(event) => onCheck(event)}
              name="environmental"
              color="primary"
            />
          }
          label="International"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={preferences.international}
              onChange={(event) => onCheck(event)}
              name="international"
              color="primary"
            />
          }
          label="International"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={preferences.health}
              onChange={(event) => onCheck(event)}
              name="health"
              color="primary"
            />
          }
          label="Health"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={preferences.education}
              onChange={(event) => onCheck(event)}
              name="education"
              color="primary"
            />
          }
          label="Education"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={preferences.artCulture}
              onChange={(event) => onCheck(event)}
              name="artCulture"
              color="primary"
            />
          }
          label="Art Culture"
        />
      </FormGroup>

      <div>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
