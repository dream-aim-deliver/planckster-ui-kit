import { Meta, StoryObj } from "@storybook/react";
import { ChatPageProps } from "@/components/chatpage/ChatPage";
import ChatPage from "@/components/chatpage/ChatPage";

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
          "Here is a map showing wildfire ![Wildfire Image](https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2012/June/120628/437915-boyle8175AD15-07D2-0105-93EC-9C601B76FE00.jpg)",
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

export const WithBase64Image: StoryObj<ChatPageProps> = {
  args: {
    chatMessageProps: [
      {
        senderName: "User 5",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "Below is a base64 encoded image of a tiny red dot.",
        sentTime: "6:00 PM",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
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
