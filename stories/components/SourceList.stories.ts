import type { Meta, StoryObj } from "@storybook/react";
import { SourceList } from "@/components/sourcelist";

const meta: Meta<typeof SourceList> = {
  title: "Components/SourceList",
  component: SourceList,
};

export default meta;

type Story = StoryObj<typeof SourceList>;

const sources = [
  { name: "Source 1" },
  { name: "Source 2" },
  { name: "Source 3" },
];

export const Default: Story = {
  args: {
    sources: sources,
  },
};
