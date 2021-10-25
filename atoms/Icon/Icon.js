import React from "react";
import PropTypes from "prop-types";
import { iconsMap, mapSize } from "./helpers";
import { getClasses } from "../../helpers/styles";
import { options } from "./constants";

import styles from "./Icon.module.css";

const Icon = ({ id, onClick, name, size, color, background, className }) => {
  const icon = iconsMap[name];
  const mappedSize = mapSize(size);
  const classes = getClasses(styles)({ color, size, background });

  return (
    <div
      id={id}
      className={classes(className, "icon", ["color", "size", "background"], {
        "is-clickeable": !!onClick,
      })}
      style={{ width: mappedSize, height: mappedSize }}
      onClick={onClick}
    >
      <svg
        viewBox={icon.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        width={mappedSize}
        height={mappedSize}
      >
        {icon.svg}
      </svg>
    </div>
  );
};

Icon.defaultProps = {
  size: "md",
  background: "transparent",
  color: "base",
};

Icon.propTypes = {
  size: PropTypes.oneOf(options.sizes),
  background: PropTypes.oneOf(options.backgrounds),
  className: PropTypes.string,
  name: PropTypes.oneOf(options.names).isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  id: PropTypes.string,
};

export default Icon;
