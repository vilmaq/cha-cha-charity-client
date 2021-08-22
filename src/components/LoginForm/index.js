import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { useUserContext } from "../../contexts/UserProvider";
import { useHistory } from "react-router-dom";

import { LOGIN } from "../../graphql/mutations";
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

const LoginForm = () => {
  let history = useHistory();

  const { dispatch } = useUserContext();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [open, setOpen] = React.useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [login] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const payload = {
        token: data.login.token,
        email: data.login.user.email,
        password: data.login.password,
        id: data.login.user.id,
      };
      localStorage.setItem("user", JSON.ify(payload));
      dispatch({
        type: "LOGIN",
        payload,
      });

      history.push("/");
    },
  });

  const handleSubmit = async (formData) => {
    console.log(formValues);

    const userData = {
      password: formData.password,
      email: formData.email,
    };
    await login({
      variables: {
        loginInput: userData,
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <FormControl />

        <div>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
