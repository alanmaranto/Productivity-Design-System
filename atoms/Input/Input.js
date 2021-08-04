import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const Input = ({ type, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    ></input>
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
