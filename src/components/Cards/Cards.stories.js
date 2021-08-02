import React from "react";
import Cards from "./index";

export default {
  title: "Components/Cards",
  component: Cards,
};

export const CardsWithProps = args => <Cards {...args} />;

CardsWithProps.args = {
  title: "Cards",
};
