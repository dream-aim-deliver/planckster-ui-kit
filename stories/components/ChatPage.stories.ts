import { Meta, StoryObj } from "@storybook/react";
import { ChatPageProps } from "@/components/ChatPage";
import ChatPage from "@/components/ChatPage";

const ChatPageMeta: Meta<ChatPageProps> = {
  title: "Components/ChatPage",
  component: ChatPage,
};

export default ChatPageMeta;

export const Default: StoryObj<ChatPageProps> = {
  args: {
    chatMessageProps: [
      {
        senderName: "User 1",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "This is a sample reply message.",
        sentTime: "2:30 PM",
        role: "user", // Aligning to the left by default
      },

      {
        senderName: "User 2",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "Another reply message with delivered status.",
        sentTime: "3:45 PM",
        isDelivered: true,
        role: "llm", // Aligning to the right
      },
      {
        senderName: "User 3",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "Replying to the previous message.",
        sentTime: "4:15 PM",
        repliedToId: "123", //the id is to be taken from backend
        role: "user", // Aligning to the left
      },
    ],
  },
};

export const NoMessages: StoryObj<ChatPageProps> = {
  args: {
    chatMessageProps: [], // Empty array for no messages
  },
};
