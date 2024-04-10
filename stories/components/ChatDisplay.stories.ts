import { Meta, StoryObj } from "@storybook/react";
import { ChatDisplay } from "@/components/chatdisplay";

const meta: Meta<typeof ChatDisplay> = {
  component: ChatDisplay,
  title: "Components/ChatDisplay",
};

export default meta;

export const Default: StoryObj<typeof ChatDisplay> = {
  args: {
    username: "User 1",
    message: "Show me the corresponding tweets to the wildfire incident.",
    userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    timestamp: "12:34 PM",
  },
};

export const WithLongMessage: StoryObj<typeof ChatDisplay> = {
  args: {
    username: "User 2",
    message:
      "Show me the details for the wildfires occurred in the first week of June in Canada.",
    userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    timestamp: "1:30 PM",
  },
};

export const WithMarkdown: StoryObj<typeof ChatDisplay> = {
  args: {
    username: "Developer",
    message: "Here is a **bold statement** and a [link](https://example.com).",
    userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    timestamp: "2:00 PM",
    markdown: true,
  },
};

export const WithImage: StoryObj<typeof ChatDisplay> = {
  args: {
    username: "Designer",
    message: "Below is an image displayed inside the message content.",
    userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    timestamp: "2:30 PM",
    image: "https://via.placeholder.com/150",
  },
};
