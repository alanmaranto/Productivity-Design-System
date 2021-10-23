import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { options } from ".";
import styles from "./Card.module.css";

const Card = ({ color, size, children }) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
      })}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  color: "base",
  size: "sm",
};

Card.propTypes = {
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  children: PropTypes.node.isRequired,
};

export default Card;
