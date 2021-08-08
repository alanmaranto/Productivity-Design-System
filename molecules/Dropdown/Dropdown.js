import React from "react";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icon";
import classNames from "classnames";

import styles from "./Dropdown.module.css";

const Dropdown = ({ options, onChange, value, className }) => {
  return (
    <div className={classNames(className, styles.dropdown)}>
      <Icon
        type="angleDown"
        hasBackground
        className={styles["dropdown-icon"]}
      />
      <select
        className={styles["dropdown-select"]}
        onChange={onChange}
        value={value}
      >
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
  className: PropTypes.string,
};

export default Dropdown;
