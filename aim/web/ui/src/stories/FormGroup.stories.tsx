import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormGroupComponent from 'components/kit_v2/FormGroup/FormGroup';

export default {
  title: 'Kit/Data Display',
  component: FormGroupComponent,
  argTypes: {},
} as ComponentMeta<typeof FormGroupComponent>;

const Template: ComponentStory<typeof FormGroupComponent> = (args) => (
  <FormGroupComponent {...args} />
);

export const FormGroup = Template.bind({});

FormGroup.args = {};
