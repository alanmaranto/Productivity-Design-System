function toKebabCase(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}

/**
 * Function to validate a string and capitalize if it's necessary
 * @param {str} str
 */
function toPascalCase(str) {
  const REG_EXP = /[A-Z]/;

  if (!REG_EXP.test(str)) {
    return str
      .replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      )
      .replace(/ /g, "");
  } else {
    return str;
  }
}

module.exports = {
  toKebabCase,
  toPascalCase,
};
