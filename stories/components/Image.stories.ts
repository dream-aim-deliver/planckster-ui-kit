import { Meta, StoryObj } from "@storybook/react";
import { Image } from "@/components/image";
import { ImageProps } from "@/components/image/Image";

const meta: Meta<ImageProps> = {
  component: Image,
  title: "Components/Image",
};

type Story = StoryObj<ImageProps>;

export const Default: Story = {
  args: {
    src: "https://cdn.britannica.com/90/191790-050-092C8C2A/Wildfire-Stanislaus-National-Forest-California-2013.jpg",
    alt: "Wildfire Image",
  },
};

export const CustomSize: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image",
    width: 200,
    height: 200,
  },
};

export const WithErrorHandling: Story = {
  args: {
    src: "invalid-url.jpg",
    alt: "No Image",
  },
};

export const Base64Image: Story = {
  args: {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    alt: "Example",
  },
};

export default meta;
