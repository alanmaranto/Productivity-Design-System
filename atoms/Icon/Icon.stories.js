import Icon, { options } from ".";
import {
  getOptionsArgTypes,
  getTemplate,
  getListTemplate,
} from "../../helpers/storybook";

export default {
  title: "Atoms/Icon",
  component: Icon,
  args: {
    __sb: { fd: "row" },
    name: "arrowRight",
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    name: getOptionsArgTypes(options.names),
    background: getOptionsArgTypes(options.backgrounds),
    onClick: { defaultValue: null },
  },
};

const Template = getTemplate(Icon);
const ListTemplate = getListTemplate(Icon);

export const Default = Template.bind({});

export const Names = ListTemplate.bind({});
Names.args = {
  items: options.names.map((name) => ({ name })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};

export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Backgrounds = ListTemplate.bind({});
Backgrounds.args = {
  items: options.backgrounds.map((background) => ({ background })),
};
