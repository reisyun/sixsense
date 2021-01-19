import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Menu from '@/components/molecules/Menu';
import Dropdown, { DropdownProps } from '@/components/molecules/Dropdown';
import Button from '@/components/atoms/Button';
import { Box } from '@/stories/Box';

const items = ['A', 'B', 'C'];

export default {
  title: 'MOLECULES/Dropdown',
  component: Menu,

  decorators: [
    Story => (
      <Box width="30vw">
        <Story />
      </Box>
    ),
  ],
} as Meta;

const overlay = <Menu items={items} />;

export const Base: Story<DropdownProps> = args => (
  <Dropdown {...args} overlay={overlay}>
    <Button variant="containe">Click</Button>
  </Dropdown>
);

Base.args = {
  trigger: 'click',
};

export const Trigger: Story<DropdownProps> = args => (
  <Dropdown {...args} overlay={overlay}>
    <Button variant="containe">Context menu</Button>
  </Dropdown>
);

Trigger.args = {
  trigger: 'contextMenu',
};
