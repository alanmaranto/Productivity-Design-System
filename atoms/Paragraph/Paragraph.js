import React from "react";
import PropTypes from "prop-types";
import styles from "./Paragraph.module.css";
import { getClasses } from "../../helpers/styles";
import { options } from "./constants";

const Paragraph = ({ children, className, size, color, weight, isStriked }) => {
  const classes = getClasses(styles)({ color, size, weight });
  return (
    <div
      className={classes(className, "paragraph", ["color", "size", "weight"], {
        "is-striked": isStriked,
      })}
    >
      {children}
    </div>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
  className: PropTypes.string,
  isStriked: PropTypes.bool,
};

Paragraph.defaultProps = {
  size: "md",
  color: "base",
  weight: "normal",
};

export default Paragraph;
