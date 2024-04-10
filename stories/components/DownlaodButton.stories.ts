import type { Meta, StoryObj } from "@storybook/react";

import { DownloadButton } from "@/components/downloadbutton";
import { DownloadButtonProps } from "@/components/downloadbutton/DownloadButton";

const meta: Meta<DownloadButtonProps> = {
  title: "Components/DownloadButton",
  component: DownloadButton,
};

export default meta;

export const Primary: StoryObj<DownloadButtonProps> = {
  // No args needed for the basic download button
};
