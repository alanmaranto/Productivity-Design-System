import React from "react";
import Spacer from "../../layout/Spacer";

export default {
  title: "Layout/Spacer",
  component: Spacer,
};

export const Zero = () => <Spacer size="0" isVisible />;
export const One = () => <Spacer size="px" isVisible />;
export const ExtraSmall = () => <Spacer size="xs" isVisible />;
export const Small = () => <Spacer size="sm" isVisible />;
export const Medium = () => <Spacer size="md" isVisible />;
export const Large = () => <Spacer size="lg" isVisible />;
export const Horizontal = () => <Spacer.Horizontal size="lg" isVisible />;
export const Vertical = () => (
  <Spacer.Vertical size="lg" isVisible maxHeight={200} />
);
