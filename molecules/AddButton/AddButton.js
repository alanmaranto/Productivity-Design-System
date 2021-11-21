import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph';
import Icon from '../../atoms/Icon';
import Spacer from '../../layout/Spacer';
import styles from './AddButton.module.css';
import {
  handleClick,
  handleOnChange,
  handleOnKeyDown,
  handleBlur,
  handleFocus,
} from './handlers';
import { shouldShowHelpText } from './helpers';
import withStyles from '../../hoc/withStyles';
import { options } from './constants';

export const AddButton = ({
  children,
  type,
  onAdd,
  icon,
  focusHelpText,
  blurHelpText,
  defaultIsEditable,
  defaultValue,
  getStyles,
}) => {
  const [isEditable, setIsEditable] = useState(defaultIsEditable);
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <div
      className={getStyles('add-button', ['type'], {
        'is-editable': isEditable,
        'is-focused': isFocused,
      })}
      onClick={handleClick({ setIsEditable, inputRef })}
    >
      {isEditable ? (
        <div className={getStyles('edit-container')}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleOnChange({ setInputValue })}
            onKeyDown={handleOnKeyDown({
              inputValue,
              onAdd,
              setInputValue,
              setIsEditable,
            })}
            onBlur={handleBlur({ inputValue, setIsEditable, setIsFocused })}
            onFocus={handleFocus({ setIsFocused })}
            autoFocus={!defaultIsEditable}
          />
          {shouldShowHelpText({
            isEditable,
            inputValue,
            focusHelpText,
            blurHelpText,
          }) && (
            <>
              <Paragraph
                size="sm"
                className="help-text"
                color={isFocused ? 'muted' : 'inverted'}
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
            color={type === 'primary' ? 'base' : 'highlight'}
            background={type === 'primary' ? 'highlight' : undefined}
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
  defaultIsEditable: PropTypes.bool,
  defaultValue: PropTypes.string,
  getStyles: PropTypes.func.isRequired,
};

AddButton.defaultProps = {
  type: 'primary',
  icon: 'plusCircle',
  onAdd: () => {},
  getStyles: () => {},
  defaultIsEditable: false,
  defaultValue: '',
};

export default withStyles(styles)(AddButton);
