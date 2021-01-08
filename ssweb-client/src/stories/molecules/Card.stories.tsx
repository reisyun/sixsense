import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Card, { CardProps } from '@/components/molecules/Card';
import { Box } from '@/stories/Box';

const content = 'Content';

export default {
  title: 'MOLECULES/Card',
  component: Card,
  argTypes: {
    image: {
      control: {
        type: 'text',
      },
    },
    footer: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    Story => (
      <Box width="30vw">
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Base: Story<CardProps> = args => <Card {...args}>{content}</Card>;

export const Image: Story<CardProps> = args => (
  <Card {...args} image="https://source.unsplash.com/Yn7NXC5SFQo/300x300">
    {content}
  </Card>
);

export const Text: Story<CardProps> = args => <Card {...args}>{content}</Card>;

export const Footer: Story<CardProps> = args => (
  <Card {...args} footer="footer">
    {content}
  </Card>
);
