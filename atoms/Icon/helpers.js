const ICONS_ASSETS_PATH = "icons";

const iconMap = {
  rightArrow: "right-arrow",
};

export const mapIcon = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`;
