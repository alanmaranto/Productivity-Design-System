import Heading, { options } from ".";
import {
  getOptionsArgTypes,
  getTemplate,
  getListTemplate,
} from "../../helpers/storybook";

export default {
  title: "Atoms/Heading",
  component: Heading,
  args: {
    children: "Consent doubt TuckBorleje challeng destroying",
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    children: { control: "text" },
  },
};

const Template = getTemplate(Heading);
const ListTemplate = getListTemplate(Heading);

export const Default = Template.bind({});

export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
