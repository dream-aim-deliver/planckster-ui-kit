import { Meta, StoryObj } from "@storybook/react";
import { ResearchContextPage } from "@/components/researchcontextpage";

const meta: Meta = {
  title: "Components/researchcontextpage",
  component: ResearchContextPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
