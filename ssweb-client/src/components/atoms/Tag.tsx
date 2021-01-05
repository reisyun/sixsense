import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/styles/theme';
import { TagColorType } from '@/styles/theme/palette';

type Color = keyof TagColorType;
type Size = 'small' | 'default';

export interface TagProps {
  color?: Color;
  size?: Size;
}

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const colorStyles = ({ theme, color = 'all' }: TagProps & ThemeProps) =>
  color &&
  css`
    background: ${theme.palette.tagColor[color]};
  `;

const sizeStyles = ({ theme, size = 'default' }: TagProps & ThemeProps) => {
  return {
    small: css`
      height: 24px;
      border-radius: 12px;
      font-size: ${theme.size.fontSize.xs};
    `,
    default: css`
      height: 32px;
      border-radius: 16px;
      font-size: ${theme.size.fontSize.sm};
    `,
  }[size];
};

const Tag: React.FC<TagProps> = styled.div(baseStyles, colorStyles, sizeStyles);
export default Tag;
