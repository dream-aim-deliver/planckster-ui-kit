// conversationpage.stories.ts

import { Meta, StoryObj } from "@storybook/react";
import { ConversationPage } from "@/components/conversationpage"; // Adjust the import path as needed

const meta: Meta = {
  title: "Components/ConversationPage",
  component: ConversationPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
