import { Meta, StoryObj } from "@storybook/react";
import ChatScreen, { ChatScreenProps } from "@/components/ChatScreen";
import { ReplyProps } from "@/components/reply/Reply";

const meta: Meta<typeof ChatScreen> = {
  component: ChatScreen,
  title: "Components/ChatScreen",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ChatScreenStory = StoryObj<typeof ChatScreen>;

export const Default: StoryObj<ChatScreenProps & { replyProps: ReplyProps }> = {
  args: {
    initialMessages: [
      {
        senderName: "User 1",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "This is a sample message",
        sentTime: "11:46",
      },
    ],
    replyProps: {
      senderName: "Chat",
      senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
      message: "This is a Reply Message",
      sentTime: "11:48",
    },
  },
};

export const WithDifferentUser: StoryObj<
  ChatScreenProps & { replyProps: ReplyProps }
> = {
  args: {
    initialMessages: [
      {
        senderName: "User 2",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "This is message from a different user",
        sentTime: "09:46",
      },
    ],
    replyProps: {
      senderName: "Sender Name",
      senderImage: "Sender Image URL",
      message: "Reply Message",
      sentTime: "Sent Time",
    },
  },
};

export default meta;
