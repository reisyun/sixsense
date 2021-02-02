import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { FontSizeType } from '@/styles/theme/size';
import { ColorType } from '@/styles/theme/palette';
import Text, { TextProps } from '@/components/atoms/Text';
import { Grid } from '@/stories/Grid';
import { Box } from '@/stories/Box';

const content = `Lorem Ipsum is simply dummy text of the printing.`;

const sizes: Array<keyof FontSizeType> = ['xs', 'sm', 'md', 'lg', 'xl'];
const colors: Array<keyof ColorType> = [
  'main',
  'sub',
  'primary',
  'secondary',
  'hint',
  'white',
  'black',
];

export default {
  title: 'ATOMS/Text',
  component: Text,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    fontSize: {
      control: {
        type: 'radio',
        options: sizes,
      },
    },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    ellipsis: { control: 'boolean' },
  },
} as Meta;

export const Base: Story<TextProps> = args => (
  <Box width="30vw">
    <Text {...args}>{content}</Text>
  </Box>
);

export const Sizes: Story<TextProps> = args => {
  return (
    <Grid flow="row">
      {sizes.map(size => (
        <Text key={size} {...args} fontSize={size}>
          {content}
        </Text>
      ))}
    </Grid>
  );
};

export const Colors: Story<TextProps> = args => {
  return (
    <Grid flow="row">
      {colors.map(color => (
        <Text key={color} {...args} color={color}>
          {content}
        </Text>
      ))}
    </Grid>
  );
};

export const Bold: Story<TextProps> = args => (
  <Text {...args} bold>
    {content}
  </Text>
);

export const Italic: Story<TextProps> = args => (
  <Text {...args} italic>
    {content}
  </Text>
);

export const Ellipsis: Story<TextProps> = args => (
  <Box width="30vw">
    <Text {...args} ellipsis>
      {content}
    </Text>
  </Box>
);
