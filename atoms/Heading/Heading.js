import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { options } from "./constants";

import styles from "./Heading.module.css";

const Heading = ({ children, color, size }) => {
  return (
    <h1
      className={classNames(styles.heading, {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
      })}
    >
      {children}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.size),
};

Heading.defaultProps = {
  color: "base",
  size: "md",
};

export default Heading;
