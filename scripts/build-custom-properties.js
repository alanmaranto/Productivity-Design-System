const fs = require("fs");
const { choices, decisions } = require("../token");

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}

function buildCustomProperties() {
  let choicesString = "";

  if (typeof choices["colors"] === "object") {
    const colorsKeys = Object.keys(choices["colors"]);

    choicesString = colorsKeys.reduce((prev, current) => {
      if (typeof choices["colors"][current] === "object") {
        const brandKeys = Object.keys(choices["colors"][current]);

        const colorString = brandKeys.reduce(
          (prevBrandKeys, currentBrandKeys) => {
            const value = choices["colors"][current][currentBrandKeys];
            return `${prevBrandKeys}--colors-${current}-${camelCaseToDash(
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
}

buildCustomProperties();
