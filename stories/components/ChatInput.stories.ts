import { Meta, StoryObj } from "@storybook/react";
import { ChatInput } from "@/components/chatinput";

const meta: Meta<typeof ChatInput> = {
  component: ChatInput,
  title: "Components/ChatInput",
  argTypes: {
    isDisabled: {
      control: "boolean",
      description: "Whether the send button should be disabled or not",
    },
  },
};

type Story = StoryObj<typeof ChatInput>;

export const Default: Story = {
  args: {
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export default meta;
