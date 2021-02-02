import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Category from '@/components/molecules/Category';

const mock: string[] = ['Flutter', 'React'];

export default {
  title: 'MOLECULES/Category',
  component: Category,
} as Meta;

export const Base: Story = args => <Category items={mock} {...args} />;
