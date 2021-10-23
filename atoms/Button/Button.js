import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { options } from "./constants";

import styles from "./Button.module.css";

const Button = ({ children, type, isInline, onClick, isMuted }) => (
  <button
    className={classNames(styles.button, {
      [styles[`type-${type}`]]: type,
      [styles["is-inline"]]: isInline && type !== "tertiary",
      [styles["is-muted"]]: isMuted && type === "primary",
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(options.types),
  isInline: PropTypes.bool,
  onClick: PropTypes.func,
  isMuted: PropTypes.bool,
};

Button.defaultProps = {
  type: "primary",
  isInline: true,
  onChange: () => {},
};

export default Button;
