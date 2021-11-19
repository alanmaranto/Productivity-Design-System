import React from 'react';
import PropTypes from 'prop-types';
import { options } from './constants';
import styles from './Card.module.css';
import withStyles from '../../hoc/withStyles';

export const Card = ({ getStyles, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={getStyles('card', ['color', 'size'], {
        'is-clickable': !!onClick,
      })}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  color: 'base',
  size: 'sm',
  getStyles: () => {},
};

Card.propTypes = {
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  getStyles: PropTypes.func.isRequired,
};

export default withStyles(styles)(Card);
