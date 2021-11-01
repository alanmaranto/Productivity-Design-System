const fs = require("fs");
const { choices, decisions } = require("../tokens");
const { toKebabCase } = require("../utils/cases");

const cleanLines = (string = "") => string.trim().replace(/^\n\n/gm, "\n");

function transformToken(parentKey, object) {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value = object[objectKey];
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(objectKey);

    if (Array.isArray(value)) {
      return `${tokensTransformed}\n  --${customProperty}: ${value.join(
        // eslint-disable-next-line prettier/prettier
        ', '
      )};`;
    } else if (typeof value === "object") {
      return `${tokensTransformed}\n${transformToken(customProperty, value)}`;
    }
    const label = `--${parentKey}-${toKebabCase(objectKey)}`;
    return `${tokensTransformed}\n  ${label}: ${value};`;
  }, "");
}

function buildCustomPropertiesRecursive() {
  const choicesString = transformToken(null, choices);
  const decisionsString = transformToken(null, decisions);

  const customProperties = `${choicesString}${decisionsString}`;

  const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`;

  fs.writeFile(
    "./styles/tokens.css",
    data,
    // data.replace(/\t/g, "").replace(/\n{2,}/g, "\n\t"),
    "utf8",
    function (err) {
      if (err) {
        return console.error(err);
      }
    }
  );
}

/* function buildCustomProperties() {
  let choicesString = "";

  if (typeof choices["colors"] === "object") {
    const colorsKeys = Object.keys(choices["colors"]);

    choicesString = colorsKeys.reduce((prev, current) => {
      if (typeof choices["colors"][current] === "object") {
        const brandKeys = Object.keys(choices["colors"][current]);

        const colorString = brandKeys.reduce(
          (prevBrandKeys, currentBrandKeys) => {
            const value = choices["colors"][current][currentBrandKeys];
            return `${prevBrandKeys}--colors-${current}-${camelCaseToKebabCase(
              currentBrandKeys
            )}: ${value};`;
          },
          ""
        );
        return `${prev}${colorString}`;
      } else {
        return `${prev}--colors-${current}: ${choices["colors"][current]};`;
      }
    }, "");
  }

  const customProperties = choicesString;

  const data = `
    :root {
        ${customProperties}
    }
    `;

  fs.writeFile(
    "./tokens.css",
    data,
    // data.replace(/\t/g, '').replace(/\n{2,}/g, '\n\t'),
    "utf8",
    function (err) {
      if (err) {
        return console.error(err);
      }
    }
  );
} */

// buildCustomProperties();
buildCustomPropertiesRecursive();
