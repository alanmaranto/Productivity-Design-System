import React from "react";
import Icon from "../../atoms/Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: "right-arrow",
};
