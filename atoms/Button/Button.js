import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css";

const Button = ({ children, type, isBlock }) => (
  <button
    className={classNames("button", {
      [`type-${type}`]: type,
      "is-block": isBlock,
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
