import classNames from "classnames";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Country, City } from "country-state-city";

import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import ReactHookFormSelect from "./ReactHookFormSelect";
import { SIGNUP } from "../../graphql/mutations";

import "./SignUpForm.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "16px 0px",
  },
  form: {
    padding: 16,
  },
  formControl: {
    padding: "8px 16px",
    minWidth: "100%",
  },
  formLabel: {
    padding: "8px 16px",
  },
  formTitle: {
    padding: "16px",
    textAlign: "center",
  },
}));

const ACCOUNT_TYPES = ["Charity", "Business", "Volunteer"];

const PREFERENCES = {
  animals: "Animals",
  environmental: "Environmental",
  international: "International",
  education: "Education",
  health: "Health",
  artCulture: "Art Culture",
};

const SignUpForm = () => {
  const classes = useStyles();
  let history = useHistory();

  const { handleSubmit, control } = useForm();

  const [countries] = useState(Country.getAllCountries());
  const [cities, setCities] = useState([]);

  const [signUp] = useMutation(SIGNUP, {
    onCompleted: (data) => {
      console.log(data);
      history.push("/login");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleChangeCountry = (event) => {
    const cities = City.getCitiesOfCountry(
      event.currentTarget.getAttribute("name")
    );

    setCities(cities);
  };

  const onSubmit = async (formData) => {
    await signUp({
      variables: {
        signUpInput: formData,
      },
    });
  };

  const renderAccountPreferences = () => (
    <Box>
      <Typography variant="h5" className={classes.formTitle}>
        Account Preferences
      </Typography>
      <Box component="div" m={1}>
        <ReactHookFormSelect
          name="type"
          label="Select an account type"
          control={control}
          defaultValue={ACCOUNT_TYPES[0]}
        >
          {ACCOUNT_TYPES.map((accountType) => {
            return (
              <MenuItem
                name={accountType}
                value={accountType}
                key={accountType}
              >
                {accountType}
              </MenuItem>
            );
          })}
        </ReactHookFormSelect>
      </Box>
      <Box component="div" m={1}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {Object.entries(PREFERENCES).map(([name, label]) => (
              <FormControlLabel
                control={
                  <Controller
                    name={name}
                    control={control}
                    defaultValue={false}
                    render={({ field: { onChange, value } }) => (
                      <Checkbox checked={value} onChange={onChange} />
                    )}
                  />
                }
                label={label}
                key={name}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );

  const renderPersonalDetails = () => (
    <Box>
      <Typography variant="h5" className={classes.formTitle}>
        Personal Details
      </Typography>
      <Box component="div" m={1}>
        <Controller
          name="fullName"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classNames(classes.formControl, {
                  "form-error": error,
                })}
              >
                Full Name
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
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classNames(classes.formControl, {
                  "form-error": error,
                })}
              >
                Phone Number
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
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classNames(classes.formControl, {
                  "form-error": error,
                })}
              >
                Address
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
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classNames(classes.formControl, {
                  "form-error": error,
                })}
              >
                Postcode
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <ReactHookFormSelect
          name="country"
          label="Select a country"
          control={control}
          handleChange={handleChangeCountry}
          rules={{ required: true }}
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
        </ReactHookFormSelect>
      </Box>
      {cities && cities.length !== 0 && (
        <Box component="div" m={1}>
          <ReactHookFormSelect
            name="city"
            label="Select a city"
            control={control}
            rules={{ required: true }}
          >
            {cities.map((city, index) => {
              return (
                <MenuItem
                  name={city.name}
                  value={city.name}
                  key={`${city.name}-${index}`}
                >
                  {city.name}
                </MenuItem>
              );
            })}
          </ReactHookFormSelect>
        </Box>
      )}
    </Box>
  );

  const renderAccountDetails = () => (
    <Box>
      <Typography variant="h5" className={classes.formTitle}>
        Account Details
      </Typography>
      <Box component="div" m={1}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classNames(classes.formControl, {
                  "form-error": error,
                })}
              >
                Email Address
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classNames(classes.formControl, {
                  "form-error": error,
                })}
              >
                Password
              </InputLabel>
              <Input
                type="password"
                value={value}
                onChange={onChange}
                error={!!error}
              />
            </FormControl>
          )}
        />
      </Box>
    </Box>
  );

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h3" className={classes.formTitle}>
        Sign Up
      </Typography>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        {renderAccountDetails()}
        <Divider />
        {renderPersonalDetails()}
        <Divider />
        {renderAccountPreferences()}
        <Box component="div" m={1} className={classes.formTitle}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            size="large"
          >
            Signup
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default SignUpForm;
