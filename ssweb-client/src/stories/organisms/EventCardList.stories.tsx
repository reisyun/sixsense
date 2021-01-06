import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import EventCardList, { EventCardListProps } from '@/components/organisms/EventCardList';
import { Box } from '@/stories/Box';

const mock: EventCardListProps['data'] = [
  {
    image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
    title: 'hello world',
    date: '2021년 1월 12일',
  },
  {
    image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    date: '2021년 1월 13일',
  },
  {
    title: 'Only text',
    date: '2021년 1월 9일',
  },
];

export default {
  title: 'ORGANISMS/EventCardList',
  component: EventCardList,
  decorators: [
    Story => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Base: Story<EventCardListProps> = args => <EventCardList {...args} data={mock} />;
