import React from "react";
import Dropdown from "../../molecules/Dropdown";

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

const options = [
  { text: "8:00 AM", value: 800 },
  { text: "11:00 AM", value: 1100 },
  { text: "1:00 PM", value: 1300 },
  { text: "3:00 PM", value: 1500 },
];

Default.args = {
  value: "",
  options,
  onChange: () => {},
};
