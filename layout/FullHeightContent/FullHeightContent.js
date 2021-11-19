import React from 'react';
import PropTypes from 'prop-types';
import styles from './FullHeightContent.module.css';

// import Spacer from "../Spacer";
import withStyles from '../../hoc/withStyles';

export const FullHeightContent = ({
  isVisible,
  content,
  footer,
  getStyles,
}) => {
  return (
    <div
      className={getStyles('full-height-content', {
        'is-visible': isVisible,
      })}
    >
      <div className={styles.content}>{content}</div>
      {/* <Spacer.Horizontal size="sm" /> */}
      <div className={styles.footer}>{footer}</div>
    </div>
  );
};

FullHeightContent.propTypes = {
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};

FullHeightContent.defaultProps = {
  isVisible: false,
  getStyles: () => {},
};

export default withStyles(styles)(FullHeightContent);
