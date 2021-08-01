import ButtonIcon from "../../molecules/ButtonIcon";

export default {
  title: "Molecules/ButtonIcon",
  component: ButtonIcon,
};

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button Secondary",
  type: "secondary",
  icon: "right-arrow",
};
