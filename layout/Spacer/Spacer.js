import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import { getSize } from "./helpers";

import styles from "./Spacer.module.css";

const Spacer = ({ size, isVisible }) => {
  return (
    <div
      className={classNames(styles.spacer, {
        [styles["is-visible"]]: isVisible,
      })}
      style={{
        width: getSize(size),
        height: getSize(size),
        display: "inline-block",
      }}
    />
  );
};

Spacer.propTypes = {
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};

Spacer.Horizontal = Horizontal;
Spacer.Vertical = Vertical;

export default Spacer;
