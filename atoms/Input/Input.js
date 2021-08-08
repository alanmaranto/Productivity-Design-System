import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.css";

const Input = ({ type, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input || className}
    />
  );
};

Input.defaultProps = {
  type: "text",
  className: "input",
  value: "",
  placeholder: "",
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["text"]),
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
