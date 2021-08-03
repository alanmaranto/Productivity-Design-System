import React from "react";
import Dropdown from "../../molecules/Dropdown";

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: "",
};
