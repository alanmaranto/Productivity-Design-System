import React from 'react';
import PropTypes from 'prop-types';
import { mapSize } from './helpers';
import { options, iconsMap } from './constants';
import withStyles from '../../hoc/withStyles';

import styles from './Icon.module.css';

export const Icon = ({
  id,
  onClick,
  name,
  size,
  className,
  isClickable,
  getStyles,
}) => {
  const icon = iconsMap[name];
  const mappedSize = mapSize(size);

  return (
    <div
      id={id}
      className={getStyles(className, 'icon', ['color', 'size', 'background'], {
        'is-clickable': isClickable || !!onClick,
      })}
      style={{ width: mappedSize, height: mappedSize }}
      onClick={onClick}
    >
      <svg
        viewBox={icon.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        width={mappedSize}
        height={mappedSize}
      >
        {icon.svg}
      </svg>
    </div>
  );
};

Icon.defaultProps = {
  size: 'md',
  background: 'transparent',
  color: 'base',
  isClickable: false,
  getStyles: () => {},
};

Icon.propTypes = {
  size: PropTypes.oneOf(options.sizes),
  background: PropTypes.oneOf(options.backgrounds),
  getStyles: PropTypes.func.isRequired,
  className: PropTypes.string,
  name: PropTypes.oneOf(options.names).isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  id: PropTypes.string,
  isClickable: PropTypes.bool,
};

export default withStyles(styles)(Icon);
