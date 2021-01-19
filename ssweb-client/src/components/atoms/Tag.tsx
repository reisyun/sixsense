import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/styles/theme';

type Size = 'small' | 'default';

export interface TagProps {
  size?: Size;
  active?: boolean;
}

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  color: white;
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

const activeStyles = ({ theme, active = false }: TagProps & ThemeProps) =>
  active
    ? css`
        background: ${theme.palette.color.primary};
      `
    : css`
        background: ${theme.palette.color.secondary};
      `;

/**
 * Tag component
 */
const Tag = styled.div<TagProps>(baseStyles, sizeStyles, activeStyles);

export default Tag;
