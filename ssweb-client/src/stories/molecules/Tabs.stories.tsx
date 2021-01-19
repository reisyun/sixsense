import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Tabs from '@/components/molecules/Tabs';
import { Box } from '@/stories/Box';

const items = ['가', '나', '다'];

export default {
  title: 'MOLECULES/Tabs',
  component: Tabs,
  decorators: [
    Story => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Base: Story = args => <Tabs {...args} items={items} />;
