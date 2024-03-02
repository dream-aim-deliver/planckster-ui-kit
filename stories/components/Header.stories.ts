// Header.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/header";

// Define component metadata
const meta: Meta<typeof Header> = {
  component: Header,
  title: "Components/Header",
};

// Define story functions
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    conversationName: "My Conversation",
    participants: ["a", "b", "c"],
    onlineStatus: [true, false, true],
  },
};

export const SingleParticipant: Story = {
  args: {
    conversationName: "One-on-One",
    participants: ["d"],
    onlineStatus: [true],
  },
};

export const NoOnlineParticipants: Story = {
  args: {
    conversationName: "Group Chat",
    participants: ["x", "y", "z"],
    onlineStatus: [false, false, false],
  },
};

export default meta;
