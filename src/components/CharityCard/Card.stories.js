import React from "react";
import CharityCard from "./index";

export default {
  title: "Components/CharityCard",
  component: CharityCard,
};

export const CharityCardWithProps = (args) => <CharityCard {...args} />;

CharityCardWithProps.args = {
  title: "CharityCard",
};
