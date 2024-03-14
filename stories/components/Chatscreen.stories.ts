import { Meta, StoryObj } from "@storybook/react";
import ChatScreen from "@/components/Chatscreen";

const meta: Meta<typeof ChatScreen> = {
  component: ChatScreen,
  title: "Components/ChatScreen",
};

type ChatScreenStory = StoryObj<typeof ChatScreen>;

export const Default: ChatScreenStory = {
  args: {
    initialMessages: [
      {
        senderName: "User 1",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "This is a sample message",
        sentTime: "11:46",
      },
      {
        senderName: "User 2",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "This is another message",
        sentTime: "11:47",
      },
    ],
  },
};

export default meta;
