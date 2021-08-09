import React from "react";
import Spacer from "../../layout/Spacer";

export default {
  title: "Layout/Spacer/Horizontal",
  component: Spacer,
  args: {
    isVisible: true,
  },
};

const Template = (props) => <Spacer.Horizontal {...props} />;

export const Default = Template.bind({});
export const ExtraSmall = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Default.args = {
  size: "md",
};

ExtraSmall.args = {
  size: "xs",
};

Small.args = {
  size: "sm",
};

Medium.args = {
  size: "md",
};

Large.args = {
  size: "lg",
};
