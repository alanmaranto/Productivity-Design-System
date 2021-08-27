import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CenteredContent.module.css";

const CenteredContent = ({ children }) => {
  return (
    <div className={classNames(styles["centered-content"])}>{children}</div>
  );
};

CenteredContent.propTypes = {
  children: PropTypes.node.isRequired,
};

CenteredContent.defaultProps = {};

export default CenteredContent;
