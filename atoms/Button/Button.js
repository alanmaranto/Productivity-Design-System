import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import Heading from "../Heading";

import styles from "./Button.module.css";
import withStyles from "../../hoc/withStyles";

const Button = ({
  children,
  type,
  getStyles,
  isInline,
  onClick,
  isMuted,
  addons,
}) => (
  <button
    className={getStyles("button", ["type"], {
      "is-inline": isInline || type === "tertiary",
      "is-muted": isMuted && type === "primary",
    })}
    onClick={onClick}
  >
    {addons && addons.prepend}
    <Heading color={type === "primary" ? "inverted" : "primary"}>
      {children}
    </Heading>
    {addons && addons.prepend}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(options.types),
  getStyles: PropTypes.func.isRequired,
  isInline: PropTypes.bool,
  onClick: PropTypes.func,
  isMuted: PropTypes.bool,
  addons: PropTypes.shape({
    prepend: PropTypes.node,
    append: PropTypes.node,
  }),
};

Button.defaultProps = {
  type: "primary",
  isInline: true,
  onChange: () => {},
  getStyles: () => {},
};

export default withStyles(styles)(Button);
