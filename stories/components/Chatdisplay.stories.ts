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
      "Show me the details for the wildfires occured in the first week of June in Canada.",
    userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
    timestamp: "1:30 PM",
  },
};

export default meta;
