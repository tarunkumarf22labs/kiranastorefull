import Pagination from "./Pagination";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "atom/pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  return <Pagination {...args} />;
};

export const Primary = Template.bind({});
