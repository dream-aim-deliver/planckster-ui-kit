import { Meta, StoryObj } from "@storybook/react";
import { SourceList } from "@/components/sourcelist";

const meta: Meta<typeof SourceList> = {
  title: "Components/SourceList",
  component: SourceList,
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
  // Add more sample sources as needed
];

export const Default: StoryObj<typeof SourceList> = {
  args: {
    sources: sampleSources,
    title: "My Sources",
  },
};

export const CustomTitle: StoryObj<typeof SourceList> = {
  args: {
    sources: sampleSources,
    title: "Important Sources",
  },
};
