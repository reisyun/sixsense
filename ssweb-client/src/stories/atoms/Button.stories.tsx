import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { capitalize } from '@/utils/capitalize';
import Button, { ButtonProps } from '@/components/atoms/Button';
import { Grid } from '../Grid';

const content = `Hello world`;

const variants = ['containe', 'outline', 'text'] as const;
const sizes = ['small', 'medium', 'large'] as const;

export default {
  title: 'ATOMS/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variants,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: sizes,
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

export const Variants: Story<ButtonProps> = args => (
  <Grid>
    {variants.map(variant => (
      <Button {...args} variant={variant}>
        {capitalize(variant)}
      </Button>
    ))}
  </Grid>
);

export const Sizes: Story<ButtonProps> = args => {
  return (
    <Grid>
      {sizes.map(size => (
        <Button key={size} {...args} size={size} variant="containe">
          {capitalize(size)}
        </Button>
      ))}
    </Grid>
  );
};

export const Disabled: Story<ButtonProps> = args => (
  <Button {...args} disabled>
    {content}
  </Button>
);
