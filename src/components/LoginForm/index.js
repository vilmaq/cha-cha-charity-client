import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import classNames from "classnames";

const LoginForm = () => {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box component="div" m={1}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: "email is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <InputLabel className={classNames({ "form-error": error })}>
                email
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
      <div>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
