import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';
import Header from '@/components/organisms/Header';
import { Box } from '@/stories/Box';

export default {
  title: 'ORGANISMS/Header',
  component: Header,
  decorators: [
    Story => (
      <Router>
        <Box>
          <Story />
        </Box>
      </Router>
    ),
  ],
} as Meta;

export const Base: Story = args => <Header {...args} />;
