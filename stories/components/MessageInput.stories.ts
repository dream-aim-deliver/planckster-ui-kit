import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import MessageInput from "@/components/messageinput";

// Define interface directly within the file
interface MessageInputProps {
  onSendMessage?: (message: string) => void; // Optional prop
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// Mock props with placeholder values
const MockProps: MessageInputProps = {
  onSendMessage: (message: string) => {
    console.log("Message sent:", message);
  },
  placeholder: "Type your message...",
};

// Define component metadata
const meta: Meta<typeof MessageInput> = {
  title: "Components/MessageInput",
  component: MessageInput,
};

// Define story functions
type Story = StoryObj<MessageInputProps>;

// Base story with default props
export const Base: Story = {
  args: MockProps,
};

// Disabled story
export const Disabled: Story = {
  ...Base,
  args: {
    ...Base.args,
    disabled: true,
  },
};

// Character limit story with state management
export const WithCharacterLimit: Story = {
  args: {
    ...MockProps,
    placeholder: "Type your message (max 250 characters)",
  },
  argTypes: {
    onChange: { action: "changed" }, // Add action for Storybook controls
  },
};

export default meta;
