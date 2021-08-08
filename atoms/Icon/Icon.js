import React from "react";
import PropTypes from "prop-types";
import { mapType, mapSize } from "./helpers";
import classNames from "classnames";
import Picture from "../Picture";

import styles from "./Icon.module.css";

const Icon = ({ type, size, hasBackground, className }) => (
  <div
    className={classNames(className, styles.icon, {
      [styles["has-background"]]: hasBackground,
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
  className: PropTypes.string,
};

export default Icon;
