import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/card";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
};

export const WithDifferentContent: Story = {
  args: {
    title: "Another Example Title",
    description: "This is another example description.",
  },
};

export const Clickable: Story = {
  args: {
    title: "Clickable Card",
    description: "This card is clickable",
    onClick: () => {}, // You can define onClick handler here
  },
};
