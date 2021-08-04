import React from "react";
import PropTypes from "prop-types";
import { mapType, mapSize } from "./helpers";
import classNames from "classnames";
import Picture from "../Picture";

import "./Icon.css";

const Icon = ({ type, size, hasBackground }) => (
  <div
    className={classNames("icon", {
      "has-background": hasBackground,
    })}
    style={{ width: mapSize(size), height: mapSize(size) }}
  >
    <Picture src={mapType(type)} width={mapSize(size)}></Picture>
  </div>
);

Icon.defaultProps = {
  size: "md",
  hasBackground: false,
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  hasBackground: PropTypes.bool,
};

export default Icon;
