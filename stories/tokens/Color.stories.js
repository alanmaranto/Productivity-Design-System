import React from "react";
import Token from "../../tokens/Token/Token";
import { choices } from "../../token";
import { toKebabCase } from "../../utils/cases";

export default {
  title: "Tokens/Colors",
  component: Token.Color,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Token.Color {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: choices.color.brand.mediumPurple,
  label: "var(--color-brand-medium-purple)",
  value: choices.color.brand.mediumPurple,
};

export const Brand = () => {
  const keys = Object.keys(choices.color.brand);
  return (
    <>
      {keys.map((key) => (
        <Token.Color
          key={key}
          label={`var(--color-brand-${toKebabCase(key)})`}
          value={choices.color.brand[key]}
        />
      ))}
    </>
  );
};

export const Red = () => {
  const keys = Object.keys(choices.color.red);
  return (
    <>
      {keys.map((key) => (
        <Token.Color
          key={key}
          label={`var(--color-red-${toKebabCase(key)})`}
          value={choices.color.red[key]}
        />
      ))}
    </>
  );
};
