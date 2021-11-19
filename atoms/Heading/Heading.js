import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import withStyles from "../../hoc/withStyles";
import styles from "./Heading.module.css";

export const Heading = ({ children, getStyles }) => {
  return (
    <header className={getStyles(["color", "size", "weight"], "heading")}>
      {children}
    </header>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  getStyles: PropTypes.func.isRequired,
  weight: PropTypes.oneOf(options.weights),
};

Heading.defaultProps = {
  color: "base",
  size: "md",
  weight: "bold",
  children: "",
};

export default withStyles(styles)(Heading);
