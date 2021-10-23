import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Horizontal, Vertical } from "./components";
import { mapSize } from "./helpers";

import styles from "./Spacer.module.css";

const Spacer = ({ size, isVisible }) => {
  return (
    <div
      className={classNames(styles.spacer, {
        [styles["is-visible"]]: isVisible,
      })}
      style={{
        width: mapSize(size),
        height: mapSize(size),
        display: "inline-block",
      }}
    />
  );
};

Spacer.defaultProps = {
  size: "none",
  isVisible: false,
};

Spacer.propTypes = {
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};

Spacer.Horizontal = Horizontal;
Spacer.Vertical = Vertical;

export default Spacer;
