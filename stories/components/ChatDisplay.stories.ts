import { Meta, StoryObj } from "@storybook/react";
import { ChatDisplay } from "@/components/chatdisplay";

const meta: Meta<typeof ChatDisplay> = {
  component: ChatDisplay,
  title: "Components/ChatDisplay",
};

type Story = StoryObj<typeof ChatDisplay>;

export const Default: Story = {
  args: {
    username: "User 1",
    message: "Show me the corresponding tweets to the wildfire incident.",
    userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    timestamp: "12:34 PM",
  },
};

export const WithLongMessage: Story = {
  args: {
    username: "User 2",
    message:
      "Show me the details for the wildfires occurred in the first week of June in Canada.",
    userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    timestamp: "1:30 PM",
  },
};

export const WithMarkdownMessage: Story = {
  args: {
    username: "User 3",
    message:
      "### Hello Markdown!\n\nThis is a **bold** message with *italics*.",
    userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    timestamp: "2:00 PM",
    markdown: true, // Indicate that the message is in Markdown format
  },
};

export const WithImage: Story = {
  args: {
    username: "User 4",
    message: "Check out this image!",
    userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    timestamp: "2:30 PM",
    image:
      "https://cdn.britannica.com/90/191790-050-092C8C2A/Wildfire-Stanislaus-National-Forest-California-2013.jpg", // Provide image URL
  },
};

export default meta;
