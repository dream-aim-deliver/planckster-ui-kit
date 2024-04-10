import type { Meta, StoryObj } from "@storybook/react";

import { UploadButton } from "@/components/uploadbutton";
import { UploadButtonProps } from "@/components/uploadbutton/UploadButton";

const meta: Meta<UploadButtonProps> = {
  title: "Components/UploadButton",
  component: UploadButton,
};

export default meta;

export const Idle: StoryObj<UploadButtonProps> = {}; // Default idle state

export const Uploading: StoryObj<UploadButtonProps> = {
  args: {
    uploadStatus: "uploading",
  },
};

export const Success: StoryObj<UploadButtonProps> = {
  args: {
    uploadStatus: "success",
  },
};

export const Error: StoryObj<UploadButtonProps> = {
  args: {
    uploadStatus: "error",
    errorMessage: "Example Error Message",
  },
};
