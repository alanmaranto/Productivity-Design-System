import React from "react";
import PropTypes from "prop-types";
import { getWidth } from "./helpers";

import "./Picture.css";

const Picture = ({ width, src }) => (
  <picture className="picture">
    <img src={src} style={{ maxWidth: getWidth(width) }}></img>
  </picture>
);

Picture.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  src: PropTypes.string.isRequired,
};

export default Picture;
