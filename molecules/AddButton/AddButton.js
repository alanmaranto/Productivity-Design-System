import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Paragraph from "../../atoms/Paragraph";
import Icon from "../../atoms/Icon";
import Spacer from "../../layout/Spacer";
import styles from "./AddButton.module.css";
import {
  handleClick,
  handleOnChange,
  handleOnKeyDown,
  handleBlur,
  handleFocus,
} from "./handlers";
import { shouldShowHelpText } from "./helpers";

import { options } from "./constants";

const AddButton = ({
  children,
  type,
  onAdd,
  icon,
  focusHelpText,
  blurHelpText,
  defaultEditMode,
  defaultValue,
}) => {
  const [editMode, setEditMode] = useState(defaultEditMode);
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <div
      className={classNames(styles["add-button"], {
        [styles[`type-${type}`]]: type,
        [styles["is-editable"]]: editMode,
        [styles["is-focused"]]: isFocused,
      })}
      onClick={handleClick({ setEditMode, inputRef })}
    >
      {editMode ? (
        <div className={styles["edit-container"]}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleOnChange({ setInputValue })}
            onKeyDown={handleOnKeyDown({
              inputValue,
              onAdd,
              setInputValue,
              setEditMode,
            })}
            onBlur={handleBlur({ inputValue, setEditMode, setIsFocused })}
            onFocus={handleFocus({ setIsFocused })}
            autoFocus={!defaultEditMode}
          />
          {shouldShowHelpText({
            editMode,
            inputValue,
            focusHelpText,
            blurHelpText,
          }) && (
            <>
              <Paragraph
                size="sm"
                className="help-text"
                color={isFocused ? "muted" : "inverted"}
              >
                {isFocused ? focusHelpText : blurHelpText}
              </Paragraph>
              <Spacer.Vertical size="sm" />
            </>
          )}
        </div>
      ) : (
        <>
          <Icon
            name={icon}
            color={type === "primary" ? "base" : "highlight"}
            background={type === "primary" ? "highlight" : undefined}
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
  type: PropTypes.oneOf(options.types),
  icon: PropTypes.oneOf(options.icons),
  onAdd: PropTypes.func.isRequired,
  focusHelpText: PropTypes.string,
  blurHelpText: PropTypes.string,
  defaultEditMode: PropTypes.bool,
  defaultValue: PropTypes.string,
};

AddButton.defaultProps = {
  type: "primary",
  icon: "plusCircle",
  onAdd: () => {},
  defaultEditMode: false,
  defaultValue: "",
};

export default AddButton;
