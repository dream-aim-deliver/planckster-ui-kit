import type { Meta, StoryObj } from "@storybook/react";

import { TopBar } from "@/components/topbar";

const meta: Meta = {
  title: "Components/TopBar",
  component: TopBar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
