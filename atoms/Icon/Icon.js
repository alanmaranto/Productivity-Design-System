import React from "react";
import PropTypes from "prop-types";
import { mapIcon } from "./helpers";

const Icon = ({ type }) => (
  <div>
    <img src={mapIcon(type)} />
  </div>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
