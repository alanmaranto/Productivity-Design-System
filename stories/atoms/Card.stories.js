import React from "react";
import Card from "../../atoms/Card";

export default {
  title: "Atoms/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", flexDirection: "column" }}>{Story()}</div>
    ),
  ],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Default.args = {
  children: "Default Card",
};

Primary.args = {
  children: "Primary Card",
  color: "primary",
};

Secondary.args = {
  children: "Secondary Card",
  color: "secondary",
};

Small.args = {
  children: "Small Card",
  color: "secondary",
  size: "sm",
};

Medium.args = {
  children: "Medium Card",
  color: "secondary",
  size: "md",
};

Large.args = {
  children: "Large Card",
  color: "secondary",
  size: "lg",
};
