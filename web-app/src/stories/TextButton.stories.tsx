import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextButton } from '../components/atoms/TextButton.atom'

export default {
  title: 'Atoms/TextButton',
  Component: TextButton,
  argTypes: {},
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Click Me!!',
  onClick: () => { alert('test') }
};
