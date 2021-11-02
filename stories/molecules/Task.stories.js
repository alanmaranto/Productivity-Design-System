import { Task, styles, options } from ".";

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from "../../helpers/storybook";

const Template = getTemplate(Task, styles);
const ListTemplate = getListTemplate(Task, styles);

export default {
  title: "Molecules/Task",
  component: Task,
  args: {},
  argTypes: {
    types: getOptionsArgTypes(options.types),
  },
};

export const Default = Template.bind({});
export const List = ListTemplate.bind({});
List.args = { items: options.types.map((type) => ({ type })) };
