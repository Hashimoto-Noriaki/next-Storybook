import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
        control: {type: "select"},
        options:["orange","green","yellow"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Circle>;

export const OrangeCircle: Story = {
  args: {
    variant: "orange",
  },
};

export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};

export const YellowCircle: Story = {
  args: {
    variant: "yellow",
  },
};
