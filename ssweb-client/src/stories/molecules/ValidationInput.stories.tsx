import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ValidationInput, { ValidationInputProps } from '@/components/molecules/ValidationInput';

const content = 'Content';

export default {
  title: 'MOLECULES/ValidationInput',
  component: ValidationInput,
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} as Meta;

const baseArgs: ValidationInputProps = {
  placeholder: 'email',
  validationHint: 'Email is required',
};

export const Base: Story<ValidationInputProps> = args => (
  <ValidationInput {...args}>{content}</ValidationInput>
);
Base.args = baseArgs;

export const Disabled: Story<ValidationInputProps> = Base.bind(this);
Disabled.args = {
  ...baseArgs,
  disabled: true,
};

export const Invalid: Story<ValidationInputProps> = Base.bind(this);
Invalid.args = {
  ...baseArgs,
  invalid: true,
};
