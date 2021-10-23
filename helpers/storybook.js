/* eslint-disable react/display-name */
import React from "react";

export const getTemplate = (Component) => (args) => <Component {...args} />;

export const getListTemplate =
  (Component) =>
  ({ items, ...args }) =>
    items.map((item, idx) => <Component key={idx} {...args} {...item} />);

export const getOptionsArgTypes = (options) => ({
  description: "**options**",
  table: {
    type: { summary: options.map((option) => `'${option}'`).join("|") },
  },
  control: { type: "select", options },
});
