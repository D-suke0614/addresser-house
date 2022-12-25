import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomButton } from './CostomButton'

export default {
  title: 'Example/CustomeButton',
  component: CustomButton,
  argTypes: {
    backgrountColor: { control: 'color' }
  },
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click me',
};
