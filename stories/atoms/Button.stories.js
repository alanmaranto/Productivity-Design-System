import Button from "../../atoms/Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  children: "Primary",
  type: "primary",
};

Secondary.args = {
  children: "Secondary",
  type: "secondary",
};
