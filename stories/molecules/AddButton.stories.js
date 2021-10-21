import React from "react";
import AddButton from "../../molecules/AddButton";

export default {
  title: "Molecules/AddButton",
  component: AddButton,
};

const Template = (args) => <AddButton {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const IsEditable = Template.bind({});

Primary.args = {
  children: "Toca para agregar la tarea",
  type: "primary",
};

Secondary.args = {
  children: "Toca para agregar la tarea",
  type: "secondary",
};

IsEditable.args = {
  children: "Toca para agregar la tarea",
  type: "primary",
  isEditable: true,
  onAdd: alert,
};
