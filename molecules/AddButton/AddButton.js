import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Paragraph from "../../atoms/Paragraph";
import Icon from "../../atoms/Icon";
import Spacer from "../../layout/Spacer";
import styles from "./AddButton.module.css";
import { handleClick, handleOnChange, handleOnKeyDown } from "./handlers";

const AddButton = ({ children, type, onAdd, isEditable }) => {
  const [editMode, setEditMode] = useState(isEditable);
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className={classNames(styles["add-button"], {
        [styles[`type-${type}`]]: type,
        [styles["is-editable"]]: editMode,
      })}
      onClick={handleClick({ setEditMode })}
    >
      {editMode ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange({ setInputValue })}
          onKeyDown={handleOnKeyDown({
            inputValue,
            onAdd,
            setInputValue,
            setEditMode,
          })}
          autoFocus
        />
      ) : (
        <>
          <Icon
            type="arrowRight"
            size="sm"
            hasBackground={type === "primary"}
          />
          <Spacer.Vertical size="sm" />
          <Paragraph>{children}</Paragraph>
        </>
      )}
    </div>
  );
};

AddButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  onAdd: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
};

AddButton.defaultProps = {
  type: "primary",
  isEditable: false,
  onAdd: () => {},
};

export default AddButton;
