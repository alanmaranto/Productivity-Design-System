import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Paragraph.module.css";
import { getClasses } from "../../helpers/styles";
import { options } from "./constants";

const Paragraph = ({ children, className, size, color, weight }) => {
  const classes = getClasses(styles)({ color, size, weight });
  return (
    <div
      className={classNames(
        classes(className, "paragraph", ["color", "size", "weight"])
      )}
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
};

Paragraph.defaultProps = {
  size: "md",
  color: "default",
  weight: "normal",
};

export default Paragraph;
