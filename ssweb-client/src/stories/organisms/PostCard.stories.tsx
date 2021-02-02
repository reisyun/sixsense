import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PostInfoModel } from '@/libs/model';
import PostCard, { PostCardProps } from '@/components/organisms/PostCard';
import { Box } from '@/stories/Box';

const mock: PostInfoModel = {
  title: 'Contrary to popular belief, Lorem Ipsum is not simply random text anything',
  date: '2021년 1월 13일',
  image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
  likeCount: 16,
  user: {
    avatar: 'https://source.unsplash.com/526rqevhDuA/300x300',
    name: 'reisyun',
  },
};

export default {
  title: 'ORGANISMS/PostCard',
  component: PostCard,
  decorators: [
    Story => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Base: Story<PostCardProps> = args => <PostCard {...args} info={mock} />;
