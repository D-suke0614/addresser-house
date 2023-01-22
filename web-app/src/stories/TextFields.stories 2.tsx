import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextFields } from '../components/atoms/TextFields.atom'

export default {
  title: 'Atoms/TextFields',
  Component: TextFields,
  argTypes: {},
} as ComponentMeta<typeof TextFields>;

const Template: ComponentStory<typeof TextFields> = (args) => <TextFields {...args} />

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'This is TextField',
  size: 'small',
  placeholder: 'sample'
};

export const Password = Template.bind({});
Password.args = {
  color: 'primary',
  label: 'This is TextField',
  size: 'small',
  type: 'password'
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'secondary',
  label: 'Disabled',
  disabled: false,
  variant: 'standard'
};
