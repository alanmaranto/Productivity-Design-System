import React from "react";
import Icon from "../../atoms/Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const ArrowRight = Template.bind({});
export const AngleDown = Template.bind({});
export const HasBackground = Template.bind({});

ArrowRight.args = {
  type: "arrowRight",
};

AngleDown.args = {
  type: "angleDown",
};

HasBackground.args = {
  type: "angleDown",
  hasBackground: true,
};
