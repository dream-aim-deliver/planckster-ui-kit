import type { Meta, StoryObj } from "@storybook/react";

import { Sort } from "@/components/sort"; // Replace with the actual path to your TextInput component

const meta: Meta = {
  title: "Sort",
  component: Sort,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Enter text...",
    value: "Initial value",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Enter text...",
    disabled: true,
  },
};
