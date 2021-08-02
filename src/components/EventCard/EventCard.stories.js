import React from "react";
import EventCard from "./index";

export default {
  title: "Components/EventCard",
  component: EventCard,
};

export const EventCardWithProps = (args) => <EventCard {...args} />;

EventCardWithProps.args = {
  title: "EventCard",
};
