export const handleClick =
  ({ setEditMode }) =>
  () => {
    setEditMode(true);
  };

export const handleOnChange =
  ({ setInputValue }) =>
  (event) => {
    setInputValue(event.currentTarget.value);
  };

export const handleOnKeyDown =
  ({ onAdd, inputValue, setInputValue, setEditMode }) =>
  (event) => {
    if (event.key === "Enter") {
      onAdd(inputValue);
      setInputValue("");
      setEditMode(false);
    }
  };
