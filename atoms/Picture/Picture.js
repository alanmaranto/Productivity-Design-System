import React from "react";
import PropTypes from "prop-types";
import { getWidth } from "./helpers";

import styles from "./Picture.module.css";

const Picture = ({ width, src }) => (
  <picture className={styles.picture}>
    <img src={src} style={{ maxWidth: getWidth(width) }}></img>
  </picture>
);

Picture.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  src: PropTypes.string.isRequired,
};

export default Picture;
