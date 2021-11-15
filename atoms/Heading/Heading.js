import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import withStyles from "../../hoc/withStyles";
import styles from "./Heading.module.css";

export const Heading = ({ children, styles }) => {
  return (
    <header className={styles(["color", "size", "weight"], "heading")}>
      {children}
    </header>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  styles: PropTypes.func.isRequired,
  weight: PropTypes.oneOf(options.weights),
};

Heading.defaultProps = {
  color: "base",
  size: "md",
  weight: "bold",
  children: "",
};

export default withStyles(styles)(Heading);
