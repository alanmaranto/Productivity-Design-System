import React from "react";
import Avatar from "../../atoms/Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: "https://placeimg.com/200/200/any",
};
