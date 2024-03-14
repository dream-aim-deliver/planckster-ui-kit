import { Meta, StoryObj } from "@storybook/react";
import { Reply } from "@/components/reply";
import { ReplyProps } from "@/components/reply/Reply";

const ReplyMeta: Meta<ReplyProps> = {
  title: "Components/Reply",
  component: Reply,
};

export default ReplyMeta;

export const Default: StoryObj<ReplyProps> = {
  args: {
    senderName: "User 1",
    senderImage: "https://example.com/user1.jpg",
    message: "This is a sample reply message.",
    sentTime: "2:30 PM",
  },
};

export const WithDeliveredStatus: StoryObj<ReplyProps> = {
  args: {
    senderName: "User 2",
    senderImage: "https://example.com/user2.jpg",
    message: "Another reply message with delivered status.",
    sentTime: "3:45 PM",
    isDelivered: true,
  },
};

export const WithReplyReference: StoryObj<ReplyProps> = {
  args: {
    senderName: "User 3",
    senderImage: "https://example.com/user3.jpg",
    message: "Replying to the previous message.",
    sentTime: "4:15 PM",
    repliedToId: "123", //the id is to be taken from backend
  },
};
