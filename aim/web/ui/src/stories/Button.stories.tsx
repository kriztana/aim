import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from 'components/kit_v2/Button';

export default {
  title: 'Kit/Inputs/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
    },
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});

Contained.args = {
  children: 'Contained Button',
};
export const Outlined = Template.bind({});

Outlined.args = {
  children: 'Outlined Button',
  variant: 'outlined',
};
export const Text = Template.bind({});

Text.args = {
  children: 'Text Button',
  variant: 'text',
};