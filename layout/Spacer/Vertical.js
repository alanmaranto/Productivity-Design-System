import React from "react";
import PropTypes from "prop-types";
import { choices } from "../../token";
import classNames from "classnames";

import styles from "./Spacer.module.css";

const getSize = (size) => choices.spacing[size];

const Vertical = ({ size, isVisible, maxHeight }) => {
  return (
    <div
      className={classNames(styles.spacer, {
        [styles["is-visible"]]: isVisible,
      })}
      style={{
        width: getSize(size),
        height: "100vh",
        display: "block",
        maxHeight,
      }}
    />
  );
};

Vertical.defaultProps = {
  maxHeight: "100%",
};

Vertical.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Vertical;
