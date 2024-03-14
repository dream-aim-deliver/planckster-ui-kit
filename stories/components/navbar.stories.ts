import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@/components/navbar"; 

const meta: Meta = {
  title: "Components/Navbar",
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
