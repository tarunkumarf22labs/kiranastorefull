import Textbox from "./Textbox";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "atom/Textbox",
  component: Textbox,
} as ComponentMeta<typeof Textbox>;

const Template: ComponentStory<typeof Textbox> = (args) => {
  return <Textbox {...args} />;
};

export const Primary = Template.bind({});
