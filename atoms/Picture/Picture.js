import React from "react";
import PropTypes from "prop-types";
import { getWidth } from "./helpers";

import styles from "./Picture.module.css";
import withStyles from "../../hoc/withStyles";

export const Picture = ({
  width,
  src,
  height,
  isRounded,
  withBorder,
  getStyles,
}) => (
  <picture
    className={getStyles("picture", {
      "is-rounded": isRounded,
      "with-border": withBorder,
    })}
  >
    <img src={src} style={{ height, maxWidth: getWidth(width) }}></img>
  </picture>
);

Picture.defaultProps = {
  height: "auto",
  withBorder: false,
  getStyles: () => {},
};

Picture.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isRounded: PropTypes.bool,
  withBorder: PropTypes.bool,
  getStyles: PropTypes.func.isRequired,
};

export default withStyles(styles)(Picture);
