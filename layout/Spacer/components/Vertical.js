import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapSize } from "../helpers";

import styles from "../Spacer.module.css";

const Vertical = ({ size, isVisible, maxHeight }) => {
  return (
    <div
      className={classNames(styles.spacer, styles.vertical, {
        [styles["is-visible"]]: isVisible,
      })}
      style={{
        width: mapSize(size),
        maxHeight,
      }}
    />
  );
};

Vertical.defaultProps = {
  size: "none",
  height: "100%",
  maxHeight: "auto",
  isVisible: false,
};

Vertical.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Vertical;
