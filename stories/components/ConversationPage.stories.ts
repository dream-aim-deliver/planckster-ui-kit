import { Meta, StoryObj } from "@storybook/react";
import { ConversationPage } from "@/components/conversationpage";

const meta: Meta = {
  title: "Components/ConversationPage",
  component: ConversationPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    convs: [
      { id: "1", title: "Conversation 1" },
      { id: "2", title: "Conversation 2" },
      { id: "3", title: "Conversation 3" },
    ],
  },
};

export const WithManyConversations: Story = {
  args: {
    convs: [
      {
        id: 3948887085,
        title: "AzOc5jIYjLyCNnZU9KzUMgR7MxM0cHtVouoFaTYovv1bJU89lJ4E6AqJwD30o",
      },
      {
        id: 6828003561,
        title:
          "CgHXiHwZqezbRE7dNPZbZhcJLlsXk10pdRmrFth8kfBFTz4qRqF8QX59jMLH44yT",
      },
      {
        id: 8361318998,
        title:
          "yAs4q1IUmN5TLCaSXovnTyaElXCSBRDWwF5PZxO95YRJdVmFtT2MzKCKyKAKyXYF7iKooK3Lss3qYeH28Xa5iO",
      },
      {
        id: 6858978203,
        title:
          "f7uviht0fHhTlMFHrNmUxjUwO8RRfAb23jaf4KFkV9Ne9NB2yFnpCpUOxJp6OlyyOqsi8eQSYgPqgsLk5HR9eFVr8",
      },
      {
        id: 3165748754,
        title:
          "P1UULvDBiZwXcjFdkvEkDABWuUYy48xpnZqzKbcwBgyZ1zJACqWZd8FPLiBAAasMfK",
      },
      {
        id: 9638939016,
        title:
          "zpuAkw5JaEm7kGy4I9Ub37NGg89o8fV6Hbr2PrGVLwymh2GAmT0X6E6yO0VbNOJ5XEN1EfCT7Me8vfyk0HgWIRdTSRA3yZg",
      },
      {
        id: 2113963329,
        title:
          "SfxrHEZmEwhCr4MBWv6a1uOCeLs1swKjZWMGr1HkGfLYeo2gm45zJYaNwxQYZfc4OzKtni6s3wOzC6OwEXcqUvifzK0ov1vjfcTf",
      },
      {
        id: 3690638241,
        title:
          "q0yK5ZrNEX1XwX9SGsO1Cl6h0RXI1DPWfVxoytq7fREUc9cM3NclRkVQQ5lZwcrkdH8pQ7AWTwfmCXN3qujsnA7R7qRyqMTC2lWNu",
      },
      {
        id: 9065489353,
        title:
          "T1Dh43oieEH9kgLfOyJZUk9u0K3mNv21nHtSQGv0q9Yc4HvypBoF1K0p1kktN1LHNgNQ3GJJ5jC79tRjxblPYB",
      },
      {
        id: 3282957542,
        title:
          "zQNMnixvUIXcgEBM3xFiS5B1j3Ez9vheiiuSw3HQgtgHtElj6VrG12iO7J8zwxXt7Bb4Rr3gQ58qH29Ys0m2GSy3P0EpZ",
      },
      {
        id: 2548741754,
        title:
          "P5FSBySAAZ5rEhvYzKBwIt6LtTNLPoOqG0tdn4FByHEObn9tgoqfU9rZvfk3u8Tjffgfc75IaWV02hlDRXrF0SUY45dRVYB0Jp1QF4",
      },
      {
        id: 3364345755,
        title:
          "xZKusCNOL1GRaTADcZsQmtYHYHciu0wBofHdZ1JbfD7V3jT8LSffKGJbO2WojFnMR3SROsVgQxJFZdqWn5itbj",
      },
      {
        id: 5986681608,
        title:
          "oF5OfCEYp5lWmG6sFY2F0RWtAt3vi3SK8E7lsE6Cm1vOQ4eJiYBLrWjRAUK0RoxMstZALFFgmRyN8rtnx2c8DptC",
      },
      {
        id: 9011289058,
        title:
          "S1ys2q3TqYJwFfrYXg93BYkyFTVnxvpsLk7gO4qRfJ3SfTdUxQdrz0sMw9BB8CMJXxrc8p7sqk5lAx1YfCMrsyW9tz5vIhL",
      },
      {
        id: 4659825469,
        title:
          "NYTQ9pEDzWffZo2kPW8rjZ9ANdGItG7TkDkrJcQiEOX2t4K9u0QNJvAs2UavbJfjldVnZBDiYb3ExonFGpw7d7f19gdIXF4hnCh",
      },
      {
        id: 9834700313,
        title:
          "7pBImG6DLdPev9RZ5jlyqjO74hqqQGhM1J4V8f4zljegVrLFlGvqY5Xa2xXDFbhNzSQMoWFJfMZpzNTuSUT3cWYbnywSpPrbVUKHld",
      },
      {
        id: 7435893084,
        title:
          "xQbLkTLZBmOW2Sg6blYgd4MRw23Y6XKFOu8ZP3jZ3eqmSef63XMDz7eLYppg4w2d3KU3h8z5fy5i6MN5lZM8MY7LmlPGrEFT",
      },
      {
        id: 2544391561,
        title:
          "eSwlz2BROytJwyzVf9tfwCY0VwVp2y6dFjYkDbJiGYxlAn4azFycuAJt2h7Izh4udt3iN9tFieNAU3",
      },
    ],
  },
};
