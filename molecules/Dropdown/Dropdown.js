import React from "react";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icon";

import "./Dropdown.css";

const Dropdown = ({ options, onChange, value }) => {
  return (
    <div className="dropdown">
      <Icon type="angleDown" hasBackground />
      <select className="dropdown-select" onChange={onChange} value={value}>
        {options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.defaultProps = {
  value: "",
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
};

export default Dropdown;
