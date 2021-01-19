import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { EventInfoModel } from '@/libs/model';
import EventCardList, { EventCardListProps } from '@/components/organisms/EventCardList';
import { Box } from '@/stories/Box';

const mock: Array<EventInfoModel> = [
  {
    image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    date: '2021년 1월 13일',
    category: 'frontEnd',
  },
  {
    title: 'Only text',
    date: '2021년 1월 9일',
    category: 'backEnd',
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

export const Base: Story<EventCardListProps> = args => (
  <EventCardList {...args} initialCard={mock} />
);
