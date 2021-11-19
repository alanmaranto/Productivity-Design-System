import React from "react";
import PropTypes from "prop-types";
import styles from "./CenteredContent.module.css";
import withStyles from "../../hoc/withStyles";

export const CenteredContent = ({ getStyles, children, isVisible }) => {
  return (
    <div
      className={getStyles("centered-content", {
        "is-visible": isVisible,
      })}
    >
      {children}
    </div>
  );
};

CenteredContent.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  isVisible: false,
};

CenteredContent.defaultProps = {
  isVisible: false,
  getStyles: () => {},
};

export default withStyles(styles)(CenteredContent);
