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
    repliedToId: "123", // The id is to be taken from the backend
    role: "user", // Aligning to the left
  },
};

export const WithImage: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "User 4",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message: "Check out this image!",
    sentTime: "2:30 PM",
    image:
      "https://cdn.britannica.com/90/191790-050-092C8C2A/Wildfire-Stanislaus-National-Forest-California-2013.jpg", // Provide image URL
    role: "user", // Aligning to the left
  },
};

export const WithMarkdownMessage: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "User 5",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message:
      "### Hello Markdown!\n\nThis is a **bold** message with *italics*.",
    sentTime: "2:00 PM",
    markdown: true, // Indicate that the message is in Markdown format
    role: "user", // Aligning to the left
  },
};
