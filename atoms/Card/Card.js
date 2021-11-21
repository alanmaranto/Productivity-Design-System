import React from 'react';
import PropTypes from 'prop-types';
import { options } from './constants';
import styles from './Card.module.css';
import withStyles from '../../hoc/withStyles';

export const Card = ({
  getStyles,
  onClick,
  children,
  isClickable,
  isDraggable,
}) => {
  return (
    <div
      onClick={onClick}
      className={getStyles('card', ['color', 'size'], {
        'is-clickable': isClickable,
        'is-draggable': isDraggable,
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
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

export default withStyles(styles)(Card);
