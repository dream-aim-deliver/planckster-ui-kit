import { Meta, StoryObj } from "@storybook/react";
import { ChatHeader } from "@/components/chatheader";

const meta: Meta<typeof ChatHeader> = {
  component: ChatHeader,
  title: "Components/ChatHeader",
  argTypes: {
    logoSrc: { control: "text" },
    logoAlt: { control: "text" },
    title: { control: "text" },
  },
};

type NavbarStory = StoryObj<typeof ChatHeader>;

export const Default: NavbarStory = {
  args: {
    logoSrc:
      "https://www.mpi-sws.org/wp-content/themes/mpi-sws/assets/images/mpi-sws-logo.svg?ver=1.8.2",
    logoAlt: "MPI-SWS Logo",
    title: "MPI",
  },
};

export const WithCustomProps: NavbarStory = {
  args: {
    logoSrc: "path-to-custom-logo.svg",
    logoAlt: "Custom Logo",
    title: "Custom Title",
  },
};

export default meta;
