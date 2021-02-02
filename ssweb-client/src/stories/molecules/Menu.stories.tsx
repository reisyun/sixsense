import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Menu from '@/components/molecules/Menu';

const items = ['최신 게시글', '주간 인기 게시글', '월간 인기 게시글'];

export default {
  title: 'MOLECULES/Menu',
  component: Menu,
} as Meta;

export const Base: Story = args => (
  <Menu {...args}>
    {items.map(item => (
      <Menu.Item>{item}</Menu.Item>
    ))}
  </Menu>
);
