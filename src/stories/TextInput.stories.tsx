import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextInput } from '../components/ui/button/TextInput'

export default {
  title: 'Component/TextInput',
  component: TextInput
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'TextInput',
  placeholder: 'input something',
  size: 'small',
  variant: 'standard'
}
