import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@/components/navbar";
import type { NavbarProps } from "@/components/navbar";

const meta: Meta = {
  title: "Components/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<NavbarProps>;

export const Default: Story = {
  args: {},
};
