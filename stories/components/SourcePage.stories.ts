import { Meta, StoryObj } from "@storybook/react";
import { SourcePage } from "@/components/sourcepage";

const meta: Meta<typeof SourcePage> = {
  title: "Pages/SourcePage",
  component: SourcePage,
};

export default meta;

export const Default: StoryObj<typeof SourcePage> = {
  args: {
    sources: [],
  },
};

const sampleSources = [
  { name: "Source 1" },
  { name: "Source 2" },
  { name: "Source 3" },
];

export const WithSources: StoryObj<typeof SourcePage> = {
  args: {
    sources: sampleSources,
  },
};
