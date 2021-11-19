import React from 'react';
import PropTypes from 'prop-types';
import { options } from './constants';
import styles from './Input.module.css';
import withStyles from '../../hoc/withStyles';

export const Input = ({
  type,
  value,
  onChange,
  placeholder,
  isInline,
  getStyles,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={getStyles('input', {
        'is-inline': isInline,
      })}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  className: 'input',
  value: '',
  placeholder: '',
  isInline: false,
  onChange: () => {},
  getStyles: () => {},
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(options.types),
  getStyles: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isInline: PropTypes.bool,
};

export default withStyles(styles)(Input);
