import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TagColorType } from '@/styles/theme/palette';
import { capitalize } from '@/utils/capitalize';
import Tag, { TagProps } from '@/components/atoms/Tag';
import { Grid } from '../Grid';

const content = `Hello world`;

const sizes = ['small', 'default'] as const;
const colors: Array<keyof TagColorType> = ['all', 'frontEnd', 'backEnd', 'dataScience', 'devOps'];

export default {
  title: 'ATOMS/Tag',
  component: Tag,
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

export const Base: Story<TagProps> = args => <Tag {...args}>{content}</Tag>;

export const Sizes: Story<TagProps> = args => (
  <Grid>
    {sizes.map(size => (
      <Tag key={size} {...args} size={size}>
        {capitalize(size)}
      </Tag>
    ))}
  </Grid>
);

export const Colors: Story<TagProps> = args => {
  return (
    <Grid flow="column">
      {colors.map(color => (
        <Tag key={color} {...args} color={color}>
          {capitalize(color)}
        </Tag>
      ))}
    </Grid>
  );
};
