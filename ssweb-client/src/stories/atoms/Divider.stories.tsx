import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Divider, { DividerProps } from '@/components/atoms/Divider';

const content1 = `Lorem Ipsum`;
const content2 = `Simply dummy text`;

export default {
  title: 'ATOMS/Divider',
  component: Divider,
  argTypes: {
    vertical: { control: 'boolean' },
  },
} as Meta;

export const Base: Story<DividerProps> = args => (
  <div>
    {content1}
    <Divider {...args} />
    {content2}
  </div>
);
