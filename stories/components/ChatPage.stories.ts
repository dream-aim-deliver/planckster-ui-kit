import { Meta, StoryObj } from "@storybook/react";
import { ChatPageProps } from "@/components/chatpage/ChatPage";
import ChatPage from "@/components/chatpage/ChatPage";

const ChatPageMeta: Meta<ChatPageProps> = {
  title: "Components/ChatPage",
  component: ChatPage,
  argTypes: {
    isDisabled: {
      control: "boolean",
      description: "Whether the send button should be disabled or not",
    },
    showLoadingIndicator: {
      control: "boolean",
      description: "Toggle to show or hide the loading indicator",
    },
  },
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
        role: "user",
        markdown: true,
      },
      {
        senderName: "User 2",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "**Bold text** and [a link](https://example.com)",
        sentTime: "3:45 PM",
        isDelivered: true,
        role: "llm",
        markdown: true,
      },
      {
        senderName: "User 3",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message:
          "Here is a map showing wildifire ![Wildfire Image](https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2012/June/120628/437915-boyle8175AD15-07D2-0105-93EC-9C601B76FE00.jpg)",
        sentTime: "4:15 PM",
        repliedToId: "123",
        role: "user",
        markdown: true,
      },
    ],
    isDisabled: false,
    showLoadingIndicator: false,
  },
};

export const Disabled: StoryObj<ChatPageProps> = {
  args: {
    chatMessageProps: [
      {
        senderName: "User 1",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "This is a sample reply message with disabled input.",
        sentTime: "2:30 PM",
        role: "user",
      },
    ],
    isDisabled: true,
    showLoadingIndicator: false,
  },
};

export const WithMarkdownAndImages: StoryObj<ChatPageProps> = {
  args: {
    chatMessageProps: [
      {
        senderName: "Markdown User",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message:
          "## Heading \nHere's a list: \n- Item 1 \n- Item 2 \n![Image](https://via.placeholder.com/150)",
        sentTime: "1:00 PM",
        role: "user",
        markdown: true,
      },
    ],
    isDisabled: false,
    showLoadingIndicator: false,
  },
};

export const NoMessages: StoryObj<ChatPageProps> = {
  args: {
    chatMessageProps: [], // No messages
    isDisabled: false,
    showLoadingIndicator: false,
  },
};
