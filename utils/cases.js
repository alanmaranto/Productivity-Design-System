function camelCaseToKebabCase(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}

module.exports = {
  camelCaseToKebabCase,
};
