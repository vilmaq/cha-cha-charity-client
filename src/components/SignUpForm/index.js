import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Country, City } from "country-state-city";
import classNames from "classnames";

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

import ReactHookFormSelect from "./ReactHookFormSelect";

import "./SignUpForm.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: "flex",
    margin: theme.spacing(3),
    minWidth: "100%",
  },
}));

const ACCOUNT_TYPES = ["Business", "Volunteer", "Charity"];
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

  const { handleSubmit, control } = useForm();

  const [countries] = useState(Country.getAllCountries());
  const [cities, setCities] = useState();

  const handleChangeCountry = (event) => {
    const cities = City.getCitiesOfCountry(
      event.currentTarget.getAttribute("name")
    );

    setCities(cities);
  };

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box component="div" m={1}>
        <Controller
          name="fullName"
          control={control}
          rules={{ required: "Full name is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel className={classNames({ "form-error": error })}>
                Full Name
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
      <Box component="div" m={1}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel className={classNames({ "form-error": error })}>
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
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel className={classNames({ "form-error": error })}>
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
      <Box component="div" m={1}>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: "Phone number is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel className={classNames({ "form-error": error })}>
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
          rules={{ required: "Address is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel className={classNames({ "form-error": error })}>
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
          rules={{ required: "Postcode is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl className={classes.formControl}>
              <InputLabel className={classNames({ "form-error": error })}>
                Postcode
              </InputLabel>
              <Input value={value} onChange={onChange} error={!!error} />
            </FormControl>
          )}
        />
      </Box>
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
        <ReactHookFormSelect
          name="country"
          label="Select a country"
          control={control}
          handleChange={handleChangeCountry}
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
      {cities && (
        <Box component="div" m={1}>
          <ReactHookFormSelect
            name="city"
            label="Select a city"
            control={control}
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
      <Box component="div" m={1}>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </Box>
    </form>
  );
};

export default SignUpForm;
