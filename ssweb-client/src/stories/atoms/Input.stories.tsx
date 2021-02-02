import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Input, { InputProps } from '@/components/atoms/Input';

export default {
  title: 'ATOMS/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} as Meta;

const baseArgs: InputProps = {
  placeholder: 'email',
};

export const Base: Story<InputProps> = args => <Input {...args} />;
Base.args = baseArgs;

export const Disabled: Story<InputProps> = Base.bind(this);
Disabled.args = {
  ...baseArgs,
  disabled: true,
};

export const Invalid: Story<InputProps> = Base.bind(this);
Invalid.args = {
  ...baseArgs,
  invalid: true,
};
