import React from "react";
import PropTypes from "prop-types";
import getIconsList from "./iconList";

const Icon = ({ type }) => (
  <div>
    <img src={getIconsList(type)} />
  </div>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
