import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Card, { CardProps } from '@/components/molecules/Card';

export default {
  title: 'MOLECULES/Card',
  component: Card,
  argTypes: {
    image: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const Base: Story<CardProps> = args => (
  <div style={{ width: '240px' }}>
    <Card {...args}>Content</Card>
  </div>
);

export const Image: Story<CardProps> = args => (
  <div style={{ width: '240px' }}>
    <Card {...args} image="https://source.unsplash.com/Yn7NXC5SFQo/300x300">
      Content
    </Card>
  </div>
);

export const Text: Story<CardProps> = args => (
  <div style={{ width: '240px' }}>
    <Card {...args}>Content</Card>
  </div>
);
