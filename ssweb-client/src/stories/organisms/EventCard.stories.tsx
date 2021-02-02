import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { EventInfoModel } from '@/libs/model';
import EventCard, { EventCardProps } from '@/components/organisms/EventCard';
import { Box } from '@/stories/Box';

const mock: EventInfoModel = {
  title: 'Lorem Ipsum is simply dummy text of the printing.',
  date: '2021년 1월 13일',
  image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
  category: 'frontEnd',
};

export default {
  title: 'ORGANISMS/EventCard',
  component: EventCard,
  decorators: [
    Story => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Base: Story<EventCardProps> = args => <EventCard {...args} info={mock} />;
