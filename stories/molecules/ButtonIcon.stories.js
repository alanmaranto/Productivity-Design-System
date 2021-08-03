import React from "react";
import ButtonIcon from "../../molecules/ButtonIcon";

export default {
  title: "Molecules/ButtonIcon",
  component: ButtonIcon,
};

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button Icon",
  type: "secondary",
  icon: "arrowRight",
};
