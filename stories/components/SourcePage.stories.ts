import { Meta, StoryObj } from "@storybook/react";
import { SourcePage } from "@/components/sourcepage";

const meta: Meta<typeof SourcePage> = {
  title: "Pages/SourcePage",
  component: SourcePage,
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

export const Default: StoryObj<typeof SourcePage> = {
  args: {
    sources: sampleSources,
    title: "My Sources",
    enableSelection: true,
  },
};

export const DisplaySourceToSelect: StoryObj<typeof SourcePage> = {
  args: {
    sources: sampleSources,
    title: "My Sources",
    showUploadButton: true,
    enableSelection: true,
  },
};

export const SelectNeededSources: StoryObj<typeof SourcePage> = {
  args: {
    sources: sampleSources,
    title: "Important Sources",
    showUploadButton: false,
    enableSelection: true,
  },
};

export const SelectedSources: StoryObj<typeof SourcePage> = {
  args: {
    sources: sampleSources,
    title: "Selected Sources",
    showUploadButton: false,
    enableSelection: false,
  },
};
