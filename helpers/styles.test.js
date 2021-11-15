import {
  getClasses,
  getDynamicClasses,
  getModuleClasses,
  getObjectClasses,
} from "./styles";

const cssModuleMock = {
  ["size-sm"]: ".xyz_size_sm",
  ["color-red"]: ".xyz_color_red",
  ["is-editable"]: ".xyz_is_editable",
  ["is-inverted"]: ".xyz_is_inverted",
};

const propsMock = { size: "sm", color: "red" };

describe("helpers styles", () => {
  describe("#getDynamicClasses", () => {
    describe("when all `props` match the `classes` array", () => {
      it("should returns the dynamic classes", () => {
        const args = ["size", "color"];
        const result = getDynamicClasses(cssModuleMock, propsMock, args);
        const expected = { ".xyz_size_sm": "sm", ".xyz_color_red": "red" };
        expect(result).toEqual(expected);
      });
    });
    describe("when all props doesnt match the classes array ", () => {
      it("should return an empty object", () => {
        const args = ["type", "width"];
        const result = getDynamicClasses(cssModuleMock, propsMock, args);
        const expected = {};
        expect(result).toEqual(expected);
      });
    });
    describe("when some `props` match the `array` classes", () => {
      it("should return the dynamic classes", () => {
        const args = ["type", "color"];
        const result = getDynamicClasses(cssModuleMock, propsMock, args);
        const expected = { ".xyz_color_red": "red" };
        expect(result).toStrictEqual(expected);
      });
    });
  });
  describe("#getModuleClasses", () => {
    describe("when `cssModule` contains the `classKey", () => {
      it("should return the module class", () => {
        const args = "size-sm";
        const result = getModuleClasses(cssModuleMock, args);
        const expected = ".xyz_size_sm";

        expect(result).toBe(expected);
      });
    });
    describe("when `cssModule` doesn't contain the `classKey`", () => {
      it("should return the `classKey", () => {
        const args = "type-primary";
        const result = getModuleClasses(cssModuleMock, args);
        const expected = "type-primary";

        expect(result).toBe(expected);
      });
    });
    describe("when `cssModule` is undefined", () => {
      it("should return the `classKey", () => {
        const args = "size-sm";
        const result = getModuleClasses(undefined, args);
        const expected = "size-sm";

        expect(result).toBe(expected);
      });
    });
    describe("when `cssModule` is null", () => {
      it("should return the `classKey", () => {
        const args = "size-sm";
        const result = getModuleClasses(null, args);
        const expected = "size-sm";

        expect(result).toBe(expected);
      });
    });
  });
  describe("#getObjectClasses", () => {
    describe("when `cssModule`and òbject`is provided", () => {
      it("should return the object classes", () => {
        const args = { "is-editable": true, "is-inverted": false };
        const result = getObjectClasses(cssModuleMock, args);
        const expected = {
          ".xyz_is_editable": true,
          ".xyz_is_inverted": false,
        };

        expect(result).toStrictEqual(expected);
      });
    });
    describe("when the object doesnt match any `cssModule` class", () => {
      it("should return an empty object", () => {
        const args = { "is-block": true, "is-inline": false };
        const result = getObjectClasses(cssModuleMock, args);
        const expected = {};

        expect(result).toStrictEqual(expected);
      });
    });
    describe("when the object is empty", () => {
      it("should return an empty object", () => {
        const args = {};
        const result = getObjectClasses(cssModuleMock, args);
        const expected = {};

        expect(result).toStrictEqual(expected);
      });
    });
  });
  describe("#getClassess", () => {
    describe("when `arg`is an array", () => {
      it("should return the classnames", () => {
        const args = ["size", "color"];
        const result = getClasses(cssModuleMock)(propsMock)(args);
        const expected = [{ ".xyz_size_sm": "sm", ".xyz_color_red": "red" }];
        expect(result).toStrictEqual(expected);
      });
    });
    // describe("when `arg`is a string", () => {
    //   it("should call `getModuleClasses`", () => {});
    // });
    // describe("when `arg`is an object", () => {
    //   it("should call `getObjectClasses`", () => {});
    // });
  });
});
