import React from "react";
import Input from "../../atoms/Input";

export default {
  title: "Atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});

Text.args = {
  type: "text",
  placeholder: "Names",
  onChange: () => {},
};
