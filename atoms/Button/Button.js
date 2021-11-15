import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { options } from "./constants";
import Heading from "../Heading";

import styles from "./Button.module.css";

const Button = ({ children, type, isInline, onClick, isMuted, addons }) => (
  <button
    className={classNames(styles.button, {
      [styles[`type-${type}`]]: type,
      [styles["is-inline"]]: isInline && type === "tertiary",
      [styles["is-muted"]]: isMuted && type === "primary",
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
};

export default Button;
