import { Heading, styles, options } from ".";
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
    weight: getOptionsArgTypes(options.weights),
    children: { control: "text" },
  },
};

const Template = getTemplate(Heading, styles);
const ListTemplate = getListTemplate(Heading, styles);

export const Default = Template.bind({});

export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};

export const Weights = ListTemplate.bind({});
Weights.args = { items: options.weights.map((weight) => ({ weight })) };
