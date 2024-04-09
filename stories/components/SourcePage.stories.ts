import { Meta, StoryObj } from "@storybook/react";
import { SourcePage } from "@/components/sourcepage";

const meta: Meta<typeof SourcePage> = {
  title: "Pages/SourcePage",
  component: SourcePage,
  argTypes: {
    showUploadButton: {
      control: { type: "boolean" },
      defaultValue: true,
    },
  },
};

export default meta;

const sampleSources = [
  {
    name: "Source 1",
    protocol: "HTTP",
    lfn: "/path/to/file1.txt",
    dateCreated: "2023-05-01",
  },
  {
    name: "Source 2",
    protocol: "FTP",
    lfn: "/path/to/file2.txt",
    dateCreated: "2023-05-02",
  },
];

export const Default: StoryObj<typeof SourcePage> = {
  args: {
    sources: sampleSources,
    title: "My Sources",
  },
};

export const CustomTitle: StoryObj<typeof SourcePage> = {
  args: {
    sources: sampleSources,
    title: "Important Sources",
  },
};

export const HideUploadButton: StoryObj<typeof SourcePage> = {
  args: {
    sources: sampleSources,
    title: "My Sources",
    showUploadButton: false,
  },
};
