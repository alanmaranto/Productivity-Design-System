import Card, { options } from ".";
import {
  getOptionsArgTypes,
  getTemplate,
  getListTemplate,
} from "../../helpers/storybook";

export default {
  title: "Atoms/Card",
  component: Card,
  args: {
    children: "Laceratons coaster sort comings windlance happily Elf-witch",
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
};

const Template = getTemplate(Card);
const ListTemplate = getListTemplate(Card);

export const Default = Template.bind({});

export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
