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
    role: "user",
  },
};

export const WithDeliveredStatus: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "User 2",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message: "Another reply message with delivered status.",
    sentTime: "3:45 PM",
    isDelivered: true,
    role: "llm",
  },
};

export const WithReplyReference: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "User 3",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message: "Replying to the previous message.",
    sentTime: "4:15 PM",
    repliedToId: "123",
    role: "user",
  },
};

export const WithMarkdown: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "Mark",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message:
      "## Heading Level 2\n- List item 1\n- List item 2\n`Code snippet here`",
    sentTime: "5:00 PM",
    markdown: true,
    role: "user",
  },
};

export const WithImage: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "Artist",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message: "This message includes an optional image shown below.",
    sentTime: "5:30 PM",
    image: "https://via.placeholder.com/150",
    role: "user",
  },
};

export const WithBase64Image: StoryObj<ChatMessageProps> = {
  args: {
    senderName: "Developer",
    senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    message: "Below is a base64 encoded image of a tiny red dot.",
    sentTime: "6:00 PM",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    role: "user",
  },
};
