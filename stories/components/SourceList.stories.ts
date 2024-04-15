import { Meta, StoryObj } from "@storybook/react";
import { SourceList } from "@/components/sourcelist";

const meta: Meta<typeof SourceList> = {
  title: "Components/SourceList",
  component: SourceList,
  argTypes: {
    sources: { control: "object" },
    title: { control: "text" },
    enableSelection: { control: "boolean" },
  },
};

export default meta;

const sampleSources = [
  {
    id: "1",
    name: "Source 1",
    protocol: "HTTP",
    lfn: "/path/to/file1.txt",
    dateCreated: "2023-05-01",
  },
  {
    id: "2",
    name: "Source 2",
    protocol: "FTP",
    lfn: "/path/to/file2.txt",
    dateCreated: "2023-05-02",
  },
];

export const Default: StoryObj<typeof SourceList> = {
  args: {
    sources: sampleSources,
    title: "My Sources",
    enableSelection: true,
  },
};

export const WithoutSelection: StoryObj<typeof SourceList> = {
  args: {
    sources: sampleSources,
    title: "My Sources",
    enableSelection: false,
  },
};

export const CustomTitle: StoryObj<typeof SourceList> = {
  args: {
    sources: sampleSources,
    title: "Important Sources",
    enableSelection: true,
  },
};
