import React from "react";
import Navbar from "./index";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

export const NavbarWithProps = (args) => <Navbar {...args} />;

NavbarWithProps.args = {
  title: "navbar",
};
