import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

const ButtonIcon = ({ children, type, icon }) => (
  <Button type={type} isBlock={false}>
    <span style={{ marginRight: 10 }}>{children}</span>
    <Icon type={icon} />
  </Button>
);

export default ButtonIcon;

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  icon: PropTypes.string.isRequired,
};

ButtonIcon.defaultProps = {
  type: "secondary",
};
