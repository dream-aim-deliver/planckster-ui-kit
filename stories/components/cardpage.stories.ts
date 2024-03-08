// cardpage.stories.ts

import { Meta, StoryObj } from "@storybook/react";
import { CardPage } from "@/components/cardpage"; // Adjust the import path as needed

const meta: Meta = {
  title: "Components/CardPage",
  component: CardPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
