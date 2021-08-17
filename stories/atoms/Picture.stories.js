import React from "react";
import Picture from "../../atoms/Picture";

export default {
  title: "Atoms/Picture",
  component: Picture,
};

const Template = (args) => <Picture {...args} />;

export const Default = Template.bind({});
export const IsRounded = Template.bind({});

Default.args = {
  src: "https://placeimg.com/400/400/any",
  width: 200,
};

IsRounded.args = {
  src: "https://placeimg.com/400/400/any",
  width: 200,
  isRounded: true,
};
