import Card, { options, styles } from '.';
import {
  getOptionsArgTypes,
  getTemplate,
  getListTemplate,
} from '../../helpers/storybook';

export default {
  title: 'Atoms/Card',
  component: Card,
  args: {
    children: 'Laceratons coaster sort comings windlance happily Elf-witch',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    children: { control: 'text' },
    isClickable: {
      table: {
        type: {
          summary: 'bool',
          detail: '// `onClick` needs to be defined in order to have effect',
        },
      },
    },
  },
};

const Template = getTemplate(Card, styles);
const ListTemplate = getListTemplate(Card, styles);

export const Default = Template.bind({});

export const Dragabble = Template.bind({});
Dragabble.args = {
  isDraggable: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
};

export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
