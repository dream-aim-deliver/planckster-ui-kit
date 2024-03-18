import { Meta, StoryObj } from "@storybook/react";
import { ChatMessage } from "@/components/chatmessage";
import { ChatMessageProps } from "@/components/chatmessage/ChatMessage";

const ChatMessageMeta: Meta<ChatMessageProps> = {
  title: "Components/ChatMessage",
  component: ChatMessage,
};

export default ChatMessageMeta;

export const Default: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "User",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message: "This is a sample reply message.",
    sentTime: "2:30 PM",
    role: "user", // Aligning to the left by default
  },
};

export const WithDeliveredStatus: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "User 2",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message: "Another reply message with delivered status.",
    sentTime: "3:45 PM",
    isDelivered: true,
    role: "llm", // Aligning to the right
  },
};

export const WithReplyReference: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "User 3",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message: "Replying to the previous message.",
    sentTime: "4:15 PM",
    repliedToId: "123", //the id is to be taken from backend
    role: "user", // Aligning to the left
  },
};
