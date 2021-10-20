import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Paragraph.module.css";

const Paragraph = ({ children, size, color, weight }) => {
  return (
    <div
      className={classNames(styles["paragraph"], {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
        [styles[`weight-${weight}`]]: weight,
      })}
    >
      {children}
    </div>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["muted", "default"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  weight: PropTypes.oneOf(["normal", "medium"]),
};

Paragraph.defaultProps = {
  size: "md",
  color: "default",
  weight: "medium",
};

export default Paragraph;
