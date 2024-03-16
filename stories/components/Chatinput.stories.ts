import { Meta, StoryObj } from "@storybook/react";
import { ChatInput } from "@/components/chatinput";

const meta: Meta<typeof ChatInput> = {
  component: ChatInput,
  title: "Components/ChatInput",
};

type Story = StoryObj<typeof ChatInput>;

export const Default: Story = {
  args: {},
};

export default meta;
