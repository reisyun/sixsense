import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { FontSizeType } from '@styles/theme/size';
import Text, { TextProps } from '@components/atoms/Text';

const content = `Lorem Ipsum is simply dummy text of the printing.`;

export default {
  title: 'SSWEB/Text',
  component: Text,
} as Meta;

export const Base = (args: TextProps) => <Text {...args}>{content}</Text>;

const sizes: Array<keyof FontSizeType> = ['xs', 'sm', 'md', 'lg', 'xl'];

export const Sizes = (args: TextProps) => {
  return sizes.map(size => (
    <div style={{ marginBottom: '16px' }}>
      <Text key={size} {...args} fontSize={size}>
        {content}
      </Text>
    </div>
  ));
};

export const Bold = (args: TextProps) => (
  <Text {...args} bold>
    {content}
  </Text>
);

export const Italic = (args: TextProps) => (
  <Text {...args} italic>
    {content}
  </Text>
);

export const Ellipsis = (args: TextProps) => (
  <div style={{ width: '300px' }}>
    <Text {...args} ellipsis>
      {content}
    </Text>
  </div>
);
