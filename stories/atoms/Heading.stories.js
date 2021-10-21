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
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  color: "default",
};

Primary.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  color: "primary",
};

Small.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  size: "sm",
};

ExtraSmall.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  size: "xs",
};
