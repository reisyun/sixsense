import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { IconSizeType } from '@/styles/theme/size';
import { ColorType } from '@/styles/theme/palette';
import Icon, { IconProps } from '@/components/atoms/Icon';
import { Grid } from '../Grid';

const sizes: Array<keyof IconSizeType> = ['small', 'medium', 'large'];
const colors: Array<keyof ColorType> = [
  'main',
  'sub',
  'primary',
  'secondary',
  'hint',
  'white',
  'black',
];

export default {
  title: 'ATOMS/Icon',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: sizes,
      },
    },
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
  },
} as Meta;

export const Base: Story<IconProps> = args => <Icon {...args} icon="heart" />;

export const Sizes: Story<IconProps> = args => (
  <Grid>
    {sizes.map(size => (
      <Icon key={size} {...args} size={size} icon="heart" />
    ))}
  </Grid>
);

export const Colors: Story<IconProps> = args => {
  return (
    <Grid>
      {colors.map(color => (
        <Icon key={color} {...args} color={color} icon="heart" />
      ))}
    </Grid>
  );
};
