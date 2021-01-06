import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Image, { ImageProps } from '@/components/atoms/Image';

export default {
  title: 'ATOMS/Image',
  component: Image,
  argTypes: {
    circle: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const Base = (args: ImageProps) => <Image {...args} />;

Base.args = {
  src: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
  alt: 'Arctic Qu',
};
