import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { getWidth } from "./helpers";

import styles from "./Picture.module.css";

const Picture = ({ width, src, height, isRounded, withBorder }) => (
  <picture
    className={classNames(styles.picture, {
      [styles["is-rounded"]]: isRounded,
      [styles["with-border"]]: withBorder,
    })}
  >
    <img src={src} style={{ height, maxWidth: getWidth(width) }}></img>
  </picture>
);

Picture.defaultProps = {
  height: "auto",
  withBorder: false,
};

Picture.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isRounded: PropTypes.bool,
  withBorder: PropTypes.bool,
};

export default Picture;
