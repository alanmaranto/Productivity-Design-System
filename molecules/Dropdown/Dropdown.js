import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atoms/Icon';

import styles from './Dropdown.module.css';
import withStyles from '../../hoc/withStyles';

export const Dropdown = ({
  options,
  onChange,
  value,
  isInline,
  id,
  getStyles,
}) => {
  return (
    <div
      id={id}
      className={getStyles('dropdown', {
        'is-inline': isInline,
      })}
    >
      <Icon className="dropdown-icon" name="angleDown" background="highlight" />
      <select
        className={getStyles['dropdown-select']}
        onChange={(event) => onChange(event?.currentTarget?.value)}
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
  value: '',
  onChange: () => {},
  getStyles: () => {},
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  isInline: PropTypes.bool,
};

export default withStyles(styles)(Dropdown);
