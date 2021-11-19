import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Token.module.css';
import Helper from '../Helper';

const Color = ({ label, value }) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles.color} style={{ backgroundColor: value }}></div>
    </Helper>
  );
};

Color.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Color;
