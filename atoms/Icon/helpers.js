const ICONS_ASSETS_PATH = "icons";

const iconMap = {
  "right-arrow": "right-arrow",
  'home': "home-outline",
};

export const mapIcon = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`;

