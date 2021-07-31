const iconsPath = "/icons/";

const iconsList = {
  "right-arrow": "right-arrow",
  'home': "home-outline",
};

const getIconsList = (type) => `${iconsPath}/${iconsList[type]}.svg`;

export default getIconsList;
