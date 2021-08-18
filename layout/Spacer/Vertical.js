import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { getSize } from "./helpers";

import styles from "./Spacer.module.css";

const Vertical = ({ size, isVisible, maxHeight }) => {
  return (
    <div
      className={classNames(styles.spacer, {
        [styles["is-visible"]]: isVisible,
      })}
      style={{
        width: getSize(size),
        height: getSize(size),
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
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Vertical;
