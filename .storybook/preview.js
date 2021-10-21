import React from "react";
import "minireset.css";
import "../styles/main.css";
import "../styles/tokens.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Story />
    </div>
  ),
];
