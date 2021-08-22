/* eslint-disable no-console */
const fs = require("fs").promises;
const [, , type, componentName] = process.argv;

const ATOMIC_DESIGN_TYPES = {
  atom: "atoms",
  molecule: "molecules",
};

function checkParams(type, component) {
  if (!type || !component) {
    console.log("Error: Please make sure you pass a type an a component name");
    process.exit(1);
  }
}
function checkParamType(mappedType) {
  if (!mappedType) {
    console.log(
      `Error: The param type "${type}" is not valid. Use "atom" or "molecule" instead`
    );
    process.exit(1);
  }
}

function readComponentFile() {
  return fs.readFile("./templates/component/Component.js", "utf8");
}

function replaceComponentFile(componentFile, componentName) {
  return componentFile.replace(/Component/g, componentName);
}

function createComponentFolder(componentPath) {
  return fs.mkdir(componentPath, { recursive: true });
}

function createComponentFile(
  componentPath,
  componentName,
  replacedComponentFile
) {
  return fs.writeFile(
    `${componentPath}/${componentName}.js`,
    replacedComponentFile,
    "utf8"
  );
}

function createComponent(type, componentName) {
  const mappedType = ATOMIC_DESIGN_TYPES[type];
  const componentPath = `./${mappedType}/${componentName}`;

  checkParams(type, componentName);
  checkParamType(mappedType);

  readComponentFile()
    .then((componentFile) => replaceComponentFile(componentFile, componentName))
    .then((replacedComponentFile) => {
      createComponentFolder(componentPath).then(() => {
        console.log("🔧 component folder created!");
        createComponentFile(
          componentPath,
          componentName,
          replacedComponentFile
        ).then(() => {
          console.log("🔧 component file created!");
        });
      });
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  createComponentFile();
}
createComponent(type, componentName);
