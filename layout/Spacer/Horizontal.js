import React from "react";
import PropTypes from "prop-types";
import { choices } from "../../token";
import classNames from "classnames";

import "./Spacer.css";

const getSize = (size) => choices.spacing[size];

const Horizontal = ({ size, isVisible }) => {
  return (
    <div
      className={classNames("spacer", {
        "is-visible": isVisible,
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
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
};

export default Horizontal;
