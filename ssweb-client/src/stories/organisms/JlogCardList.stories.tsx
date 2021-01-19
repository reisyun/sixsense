import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PostInfoModel } from '@/libs/model';
import JlogCardList, { JlogCardListProps } from '@/components/organisms/JlogCardList';
import { Box } from '@/stories/Box';

const mock: Array<PostInfoModel> = [
  {
    title: 'Contrary to popular belief, Lorem Ipsum is not simply random text anything',
    date: '2021년 1월 13일',
    likeCount: 16,
    user: {
      avatar: 'https://source.unsplash.com/526rqevhDuA/300x300',
      name: 'reisyun',
    },
  },
];

export default {
  title: 'ORGANISMS/JlogCardList',
  component: JlogCardList,
  decorators: [
    Story => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Base: Story<JlogCardListProps> = args => <JlogCardList {...args} initialCard={mock} />;
