import type { Meta, StoryObj } from "@storybook/react";

import { LoginPage } from "@/components/loginpage";

const meta: Meta = {
  title: "Components/LoginPage",
  component: LoginPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
