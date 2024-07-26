import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Example/Circle",
  argTypes: {
    variant: {
        control: {type: "select"},
        options:["orange","green","yellow"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * オレンジ色の円です。
 */
export const OrangeCircle: Story = {
  args: {
    variant: "orange",
  },
};

/**
 * 緑色の円です。
 */
export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};

/**
 * 黄色の円です。
 */
export const YellowCircle: Story = {
  args: {
    variant: "yellow",
  },
};

export const GroupedCircle: Story = {
    render: () => (
        <div style = {{ padding: 10 }}>
          <Circle variant="orange"/>
          <Circle variant="green"/>
          <Circle variant="yellow"/>
        </div>
    )
}
