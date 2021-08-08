import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Button.module.css";

const Button = ({ children, type, isBlock }) => (
  <button
    className={classNames(styles.button, {
      [styles[`type-${type}`]]: type,
      [styles["is-block"]]: isBlock && type !== "tertiary",
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  isBlock: PropTypes.bool,
};

Button.defaultProps = {
  type: "primary",
  isBlock: true,
};

export default Button;
