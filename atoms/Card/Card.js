import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { options } from "./constants";
import styles from "./Card.module.css";

const Card = ({ color, size, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.card, {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
        [styles["is-clickable"]]: !!onClick,
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
  onClick: PropTypes.func,
};

export default Card;
