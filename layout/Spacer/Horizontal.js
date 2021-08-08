import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { getSize } from "./helpers";

import styles from "./Spacer.module.css";

const Horizontal = ({ size, isVisible }) => {
  return (
    <div
      className={classNames(styles.spacer, {
        [styles["is-visible"]]: isVisible,
      })}
      style={{
        width: "100%",
        height: getSize(size),
        display: "block",
      }}
    />
  );
};

Horizontal.propTypes = {
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};

export default Horizontal;
