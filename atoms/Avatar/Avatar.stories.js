import { Avatar, styles, options } from '.';
import {
  getOptionsArgTypes,
  getTemplate,
  getListTemplate,
} from '../../helpers/storybook';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    __sb: { fd: 'row ' },
    src: 'https://placeimg.com/200/200/any',
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
};

const Template = getTemplate(Avatar, styles);
const ListTemplate = getListTemplate(Avatar, styles);

export const Default = Template.bind({});

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
