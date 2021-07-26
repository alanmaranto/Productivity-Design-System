import React from "react";
import Heading from "../../atoms/Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Small = Template.bind({});
export const ExtraSmall = Template.bind({});

Default.args = {
  children: "Heading",
};

Primary.args = {
  children: "Heading",
  color: "primary",
};

Small.args = {
  children: "Heading",
  size: "sm",
};

ExtraSmall.args = {
  children: "Heading",
  size: "xs",
};
