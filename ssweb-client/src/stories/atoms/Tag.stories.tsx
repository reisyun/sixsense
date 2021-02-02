import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { capitalize } from '@/libs/utils';
import Tag, { TagProps } from '@/components/atoms/Tag';
import { Grid } from '@/stories/Grid';

const content = `Hello world`;

const sizes = ['small', 'default'] as const;

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
    active: { control: 'boolean' },
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

export const Active: Story<TagProps> = args => (
  <Tag {...args} active>
    {content}
  </Tag>
);
