import React from "react";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icon";

import "./Dropdown.css";

const Dropdown = ({ value }) => {
  return (
    <div className="dropdown">
      <Icon type="angleDown" hasBackground />
      <select className="dropdown-select">
        <option>8:00 AM</option>
        <option>9:00 AM</option>
      </select>
    </div>
  );
};

Dropdown.defaultProps = {
  value: null,
};

Dropdown.propTypes = {
  value: PropTypes.string,
};

export default Dropdown;
