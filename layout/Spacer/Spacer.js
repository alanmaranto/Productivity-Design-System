import React from "react";
import PropTypes from "prop-types";
import { choices } from "../../token";
import classNames from "classnames";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";

import styles from "./Spacer.module.css";

const getSize = (size) => choices.spacing[size];

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
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
};

Spacer.Horizontal = Horizontal;
Spacer.Vertical = Vertical;

export default Spacer;
