export const getWidth = (width) =>
  typeof width === "string" ? width : `${width}px`;

export default getWidth;
