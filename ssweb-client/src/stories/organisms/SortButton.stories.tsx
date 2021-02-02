import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import SortButton, { SortButtonProps } from '@/components/organisms/SortButton';
import { Box } from '@/stories/Box';

const items = ['최신순', '인기순'];

export default {
  title: 'ORGANISMS/SortButton',
  component: SortButton,

  decorators: [
    Story => (
      <Box width="30vw">
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Base: Story<SortButtonProps> = args => <SortButton {...args} items={items} />;
