import Input, { options } from ".";
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from "../../helpers/storybook";

export default {
  title: "Atoms/Input",
  component: Input,
  args: {
    placeholder: "Kingdown slowed",
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
  },
};

const Template = getTemplate(Input);
const ListTemplate = getListTemplate(Input);

export const Default = Template.bind({});

export const Value = Template.bind({});
Value.args = { value: "Others mainly cakehole Thorin moldy facial" };

export const Types = ListTemplate.bind({});
Types.args = { items: options.types.map((type) => ({ type })) };

export const Inline = Template.bind({});
Inline.args = { isInline: true };