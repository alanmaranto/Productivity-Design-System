function toKebabCase(str) {
  // return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  return str
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
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
      .replace(/ /g, '');
  } else {
    return str;
  }
}

const toCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = {
  toKebabCase,
  toPascalCase,
  toCapitalize,
};
