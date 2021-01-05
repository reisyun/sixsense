import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { FontSizeType } from '@styles/theme/size';
import Text, { TextProps } from '@components/atoms/Text';
import { Grid } from '../Grid';

const content = `Lorem Ipsum is simply dummy text of the printing.`;

export default {
  title: 'SSWEB/Text',
  component: Text,
  argTypes: {
    fontSize: {
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
    bold: {
      control: {
        type: 'boolean',
      },
    },
    italic: {
      control: {
        type: 'boolean',
      },
    },
    ellipsis: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const Base = (args: TextProps) => (
  <div style={{ width: '240px' }}>
    <Text {...args}>{content}</Text>
  </div>
);

const sizes: Array<keyof FontSizeType> = ['xs', 'sm', 'md', 'lg', 'xl'];

export const Sizes = (args: TextProps) => {
  return sizes.map(size => (
    <Grid flow="column">
      <Text key={size} {...args} fontSize={size}>
        {content}
      </Text>
    </Grid>
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
  <div style={{ width: '240px' }}>
    <Text {...args} ellipsis>
      {content}
    </Text>
  </div>
);
