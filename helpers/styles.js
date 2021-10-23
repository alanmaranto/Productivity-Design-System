import classNames from "classnames";

export const getDynamicClasses = (stylesModule, props, arg) => {
  return arg.reduce((prev, curr) => {
    const prop = props[curr];
    return { ...prev, [stylesModule[`${curr}-${prop}`]]: prop };
  }, {});
};

export const getModuleClasses = (stylesModule, arg) => {
  return stylesModule[arg] || arg;
};

export const getObjectClasses = (stylesModule, arg) => {
  return Object.keys(arg).reduce((prev, curr) => {
    return { ...prev, [stylesModule[curr]]: arg[curr] };
  }, {});
};

export const getClasses =
  (stylesModule) =>
  (props) =>
  (...args) => {
    return classNames(
      args.map((arg) => {
        if (Array.isArray(arg)) {
          return getDynamicClasses(stylesModule, props, arg);
        } else if (typeof arg === "string") {
          return getModuleClasses(stylesModule, arg);
        } else if (typeof arg === "object") {
          return getObjectClasses(stylesModule, arg);
        }
      })
    );
  };
