import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextButton } from '../components/ui/button/TextButton'

export default {
  title: 'Components/TextButton',
  component: TextButton
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />

export const Primary = Template.bind({});
Primary.args = {
  label: 'TextButton',
  color: 'error',
  size: 'small',
};
