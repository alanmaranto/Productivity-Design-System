import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={classNames(styles.container)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {};

export default Container;
