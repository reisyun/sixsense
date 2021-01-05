import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '@components/atoms/Button';
import { Grid } from '../Grid';

const content = `This is Button`;

export default {
  title: 'SSWEB/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['none', 'containe', 'outline', 'text'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const Base: Story<ButtonProps> = args => <Button {...args}>{content}</Button>;

const sizes = ['small', 'medium', 'large'] as const;

export const Sizes = (args: ButtonProps) => {
  return (
    <Grid>
      {sizes.map(size => (
        <Button key={size} {...args} size={size} variant="containe">
          {content}
        </Button>
      ))}
    </Grid>
  );
};

const variants = ['containe', 'outline', 'text'] as const;

export const Variants: Story<ButtonProps> = args => (
  <Grid>
    {variants.map(variants => (
      <Button {...args} variant={variants}>
        {content}
      </Button>
    ))}
  </Grid>
);

export const Disabled: Story<ButtonProps> = args => (
  <Button {...args} disabled>
    {content}
  </Button>
);
