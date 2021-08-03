const ICONS_ASSETS_PATH = "icons";

const iconMap = {
  arrowRight: "arrow-right",
  angleDown: "angle-down",
};

export const mapIcon = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`;
