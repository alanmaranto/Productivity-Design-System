/* eslint-disable react/display-name */
import React from "react";
import { getClasses } from "./styles";

export const getTemplate = (Component, styles) => (args) =>
  <Component {...args} styles={getClasses(styles)(args)} />;

export const getListTemplate =
  (Component, styles) =>
  ({ items, ...args }) =>
    items.map((item, idx) => (
      <Component
        key={idx}
        {...args}
        {...item}
        styles={getClasses(styles)({ ...args, ...item })}
      />
    ));

export const getOptionsArgTypes = (options) => ({
  description: "**options**",
  table: {
    type: { summary: options.map((option) => `'${option}'`).join("|") },
  },
  control: { type: "select", options },
});
