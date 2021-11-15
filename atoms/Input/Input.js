import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import { options } from "./constants";
import styles from "./Input.module.css";

const Input = ({ type, value, onChange, placeholder, isInline }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className(styles.input, {
        [styles["is-inline"]]: isInline,
      })}
    />
  );
};

Input.defaultProps = {
  type: "text",
  className: "input",
  value: "",
  placeholder: "",
  isInline: false,
  onChange: () => {},
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(options.types),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isInline: PropTypes.bool,
};

export default Input;
