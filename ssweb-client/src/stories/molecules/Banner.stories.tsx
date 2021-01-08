import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '@/components/molecules/Banner';
import { Box } from '@/stories/Box';

const content = 'Content';

export default {
  title: 'MOLECULES/Banner',
  component: Banner,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    Story => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Base: Story<BannerProps> = args => <Banner {...args}>{content}</Banner>;
Base.args = {
  title: 'Hello world',
  description: 'Lorem Ipsum is simply dummy text of the printing.',
};
