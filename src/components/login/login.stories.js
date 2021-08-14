import React from "react";
export { Login } from "./index";

export default {
  title: "Components/Login",
  component: Login,
};

export const LoginCardWithProps = (args) => <login {...args} />;

LoginCardWithProps.args = {
  title: "Login",
};
