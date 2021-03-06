import React from 'react';
import PropTypes from 'prop-types';

import { Horizontal, Vertical } from './components';

import styles from './Spacer.module.css';
import { mapSize } from './helpers';
import withStyles from '../../hoc/withStyles';

export const Spacer = ({ getStyles, size, isVisible }) => (
  <div
    className={getStyles('spacer', {
      'is-visible': isVisible,
    })}
    style={{
      display: 'inline-block',
      width: mapSize(size),
      height: mapSize(size),
    }}
  />
);

Spacer.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  getStyles: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};

Spacer.defaultProps = {
  size: 'none',
  isVisible: false,
  getStyles: () => {},
};

const SpacerWithStyles = withStyles(styles)(Spacer);

SpacerWithStyles.Vertical = Vertical;
SpacerWithStyles.Horizontal = Horizontal;

export default SpacerWithStyles;
