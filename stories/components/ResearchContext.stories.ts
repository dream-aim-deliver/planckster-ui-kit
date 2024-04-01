import { Meta, StoryObj } from "@storybook/react";
import { ResearchContextPage } from "@/components/researchcontextpage";

const meta: Meta = {
  title: "Components/ResearchContextPage",
  component: ResearchContextPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: [
      {
        description:
          "jahdlshoqihdiqowbdoiqwhdioqhdhdiqohwoihqiowdhajbsdjq7125315381253891wefiwhfpw",
        title: "Canada wildfire",
      },
      {
        description:
          "jahdlshoqihdiqowbdoiqwhdioqhdhdiqohwoihqiowdhajbsdjq7125315381253891wefiwhfpw",
        title: "Climate change effects",
      },
      {
        description:
          "jahdlshoqihdiqowbdoiqwhdioqhdhdiqohwoihqiowdhajbsdjq7125315381253891wefiwhfpw",
        title: "Renewable energy sources",
      },
    ],
  },
};
export const WithManyContexts: Story = {
  args: {
    cards: [
      {
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        title: "AzOc5jIYjLyCNnZU9KzUMgR7MxM0cHtVouoFaTYovv1bJU89lJ4E6AqJwD30o",
      },
      {
        description:
          "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
        title:
          "CgHXiHwZqezbRE7dNPZbZhcJLlsXk10pdRmrFth8kfBFTz4qRqF8QX59jMLH44yT",
      },
      {
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
        title:
          "yAs4q1IUmN5TLCaSXovnTyaElXCSBRDWwF5PZxO95YRJdVmFtT2MzKCKyKAKyXYF7iKooK3Lss3qYeH28Xa5iO",
      },
    ],
  },
};
