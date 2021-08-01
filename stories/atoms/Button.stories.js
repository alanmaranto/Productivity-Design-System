import React from 'react';
import Button from "../../atoms/Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

Primary.args = {
  children: "Button Primary",
  type: "primary",
};

Secondary.args = {
  children: "Button Secondary",
  type: "secondary",
};

Tertiary.args = {
  children: "Button Tertiary",
  type: "tertiary",
};
