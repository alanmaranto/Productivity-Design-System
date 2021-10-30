import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import withStyles from "../../hoc/withStyles";
import styles from "./Heading.module.css";

const Heading = ({ children, styles }) => {
  return <h1 className={styles(["color", "size"], "heading")}>{children}</h1>;
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.size),
  styles: PropTypes.func.isRequired,
};

Heading.defaultProps = {
  color: "base",
  size: "md",
};

export default withStyles(styles)(Heading);
