import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CenteredContent.module.css";

const CenteredContent = ({ children, isVisible }) => {
  return (
    <div
      className={classNames(styles["centered-content"], {
        [styles["is-visible"]]: isVisible,
      })}
    >
      {children}
    </div>
  );
};

CenteredContent.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: false,
};

CenteredContent.defaultProps = {
  isVisible: false,
};

export default CenteredContent;
