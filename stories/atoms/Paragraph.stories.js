import React from "react";
import Paragraph from "../../atoms/Paragraph";

export default {
  title: "Atoms/Paragraph",
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
export const Muted = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const WeightNormal = Template.bind({});
export const WeightMedium = Template.bind({});

Default.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  color: "default",
};

Muted.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  color: "muted",
};

Small.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  size: "sm",
};

Medium.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  size: "md",
};

Large.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  size: "lg",
};

WeightMedium.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  size: "md",
  weight: "medium",
};

WeightNormal.args = {
  children: `El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.`,
  size: "md",
  weight: "normal",
};
