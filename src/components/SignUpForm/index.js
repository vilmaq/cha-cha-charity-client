import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import { Country, City } from "country-state-city";
import classNames from "classnames";

import "./SignUpForm.css";

// export class SignUp extends Component {
//   state = {
//     step: 1,
//     fullName: "",
//     email: "",
//     password: "",
//     postcode: "",
//     street: "",
//     phoneNumber: "",
//     selectCountry: "",
//     selectedCountryISO: "",
//     setSelectedCity: "",
//     category: "",
//   };

//   //Proceed to the next form
//   nextStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step + 1,
//     });
//   };

//   //Go back to the previous form
//   prevStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step - 1,
//     });
//   };

//   //Handle
// }

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
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-form": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-form": {
      margin: theme.spacing(2),
    },
  },
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

const SignUpForm = ({ handleClose }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const [fullName, setFullName] = useState("");
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
  const [category, setCategory] = React.useState("None");
  const [open, setOpen] = React.useState(false);

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
    const city = City.getCitiesOfCountry(event.target.value);
    const country = event.target.value;
    const countryName = event.currentTarget.getAttribute("name");
    setSelectedCountryISO(country);
    setSelectedCountry(countryName);
    setCities(city);
  };

  const handleChangeCity = (event) => {
    console.log(event.target.value);
    setSelectedCity(event.target.value);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSelectClose = () => {
    setOpen(false);
  };

  const onSubmit = (formData) => {
    console.log(formData);
    // const userData = {
    //   type: "Volunteer",
    //   fullName: "Sarah James",
    //   password: "password222",
    //   email: "sarah.james@gmail.com",
    //   phoneNumber: "07796342221",
    //   street: "New Street",
    //   postcode: "B18 NN",
    //   // city: "Birmingham",
    //   // country: "UK",
    //   // animals: false,
    //   // environmental: false,
    //   // international: false,
    //   // health: false,
    //   // education: false,
    //   // art_culture: false,
    // };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box component="div" m={1}>
        <Controller
          name="fullName"
          control={control}
          defaultValue=""
          rules={{ required: "Full name is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <InputLabel className={classNames({ "form-error": error })}>
                Username
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <Controller
          name="Email"
          control={control}
          defaultValue=""
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <InputLabel className={classNames({ "form-error": error })}>
                email address
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <Controller
          name="Password"
          control={control}
          defaultValue=""
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <InputLabel className={classNames({ "form-error": error })}>
                password
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          rules={{ required: "phoneNumber is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <InputLabel className={classNames({ "form-error": error })}>
                phoneNumber
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <Controller
          name="street"
          control={control}
          defaultValue=""
          rules={{ required: "street is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <InputLabel className={classNames({ "form-error": error })}>
                street
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <Controller
          name="postcode"
          control={control}
          defaultValue=""
          rules={{ required: "postcode is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <InputLabel className={classNames({ "form-error": error })}>
                postcode
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
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
            value={category}
            onChange={handleChange}
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
      <div className={classes.secondRoot}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
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
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
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
          </FormGroup>
        </FormControl>
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
