import Button, { options, styles } from '.';
import {
  getOptionsArgTypes,
  getTemplate,
  getListTemplate,
} from '../../helpers/storybook';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'You shall not pass!',
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    children: { control: 'text' },
    isMuted: { description: 'It requires `type`to be "primary"' },
    onClick: { defaultValue: null },
  },
};

const Template = getTemplate(Button, styles);
const ListTemplate = getListTemplate(Button, styles);

export const Default = Template.bind({});
export const Types = ListTemplate.bind({});
Types.args = {
  items: options.types.map((type) => ({ type })),
};

export const Inline = Template.bind({});
Inline.args = {
  isInline: true,
};

export const Muted = Template.bind({});
Muted.args = {
  type: 'primary',
  isMuted: true,
};
