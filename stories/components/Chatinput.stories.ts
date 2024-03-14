import { Meta, StoryObj } from "@storybook/react";
import { Chatinput } from "@/components/chatinput";

const meta: Meta<typeof Chatinput> = {
  component: Chatinput,
  title: "Components/Chatinput",
};

type Story = StoryObj<typeof Chatinput>;

export const Default: Story = {
  args: {},
};

export default meta;
