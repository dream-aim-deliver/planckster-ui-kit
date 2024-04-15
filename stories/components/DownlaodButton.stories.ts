import type { Meta, StoryObj } from "@storybook/react";

import { DownloadButton } from "@/components/downloadbutton";
import { DownloadButtonProps } from "@/components/downloadbutton/DownloadButton";

const meta: Meta<DownloadButtonProps> = {
  title: "Components/DownloadButton",
  component: DownloadButton,
};

export default meta;

const sampleSources = [
  {
    id: "1",
    name: "Source 1",
    downloadUrl: "http://example.com/file1.zip",
    protocol: "HTTP",
    lfn: "/path/to/file1.txt",
    dateCreated: "2023-05-01",
  },
  {
    id: "2",
    name: "Source 2",
    downloadUrl: "http://example.com/file2.zip",
    protocol: "FTP",
    lfn: "/path/to/file2.txt",
    dateCreated: "2023-05-02",
  },
];

const selectedIds = {
  "2": true,
};

export const Primary: StoryObj<DownloadButtonProps> = {
  args: {
    sources: sampleSources,
    selectedIds: {},
  },
};

export const SpecificDownload: StoryObj<DownloadButtonProps> = {
  args: {
    sources: sampleSources,
    selectedIds: selectedIds,
  },
};

export const AllSelected: StoryObj<DownloadButtonProps> = {
  args: {
    sources: sampleSources,
    selectedIds: { "1": true, "2": true },
  },
};
