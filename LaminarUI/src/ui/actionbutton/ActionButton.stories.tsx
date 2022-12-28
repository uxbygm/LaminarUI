import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ActionButton } from './ActionButton';

export default {
  title: 'LaminarUI/ActionButton',
  component: ActionButton,
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined'] } 
  },
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => (<ActionButton {...args} >Example Button</ActionButton>);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
 
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
};

