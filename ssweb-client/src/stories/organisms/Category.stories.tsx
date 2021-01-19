import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Category from '@/components/organisms/Category';

export default {
  title: 'ORGANISMS/Category',
  component: Category,
} as Meta;

export const Base: Story = args => <Category {...args} />;
