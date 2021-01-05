import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { lighten } from 'polished';
import { ThemeProps } from '@styles/theme';

export interface ButtonProps {
  variant?: 'containe' | 'outline' | 'text' | 'none';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: none;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: background 0.3s;
  cursor: pointer;

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  & > span {
    margin: 0 8px;
  }
`;

const variantStyles = ({ theme, variant = 'none' }: ButtonProps & ThemeProps) => {
  const variantButton = Object.create(null);
  /**
   * containe
   */
  variantButton.containe = css`
    background: ${theme.palette.color.main};
    color: ${theme.palette.color.white};

    &:hover {
      background: ${lighten(0.04, theme.palette.color.main)};
    }
  `;

  /**
   * outline
   */
  variantButton.outline = css`
    border: 1px solid ${theme.palette.background.divider};

    &:hover {
      background: ${theme.palette.overlay.hover};
    }
  `;

  /**
   * text
   */
  variantButton.text = css`
    background: transparent;
    color: ${theme.palette.color.main};

    &:hover {
      background: ${theme.palette.overlay.hover};
    }
  `;

  /**
   * none
   */
  variantButton.none = null;

  return variantButton[variant];
};

const sizeStyles = ({ theme, size = 'medium' }: ButtonProps & ThemeProps) => {
  const sizeButton = Object.create(null);

  /**
   * small
   */
  sizeButton.small = css`
    padding: 0 16px;
    height: 32px;
    font-size: ${theme.size.fontSize.xs};
  `;

  /**
   * medium
   */
  sizeButton.medium = css`
    padding: 0 24px;
    height: 40px;
    font-size: ${theme.size.fontSize.sm};
  `;

  /**
   * large
   */
  sizeButton.large = css`
    padding: 0 32px;
    height: 48px;
    font-size: ${theme.size.fontSize.md};
  `;

  return sizeButton[size];
};

const disabledStyles = ({ theme, disabled }: ButtonProps & ThemeProps) =>
  disabled &&
  css`
    background: ${theme.palette.background.disabled};
    color: ${theme.palette.color.secondary};

    &:disabled {
      background: ${theme.palette.background.disabled};
      cursor: auto;
    }
  `;

/**
 * Button component
 */
const Button = styled.button<ButtonProps>(baseStyles, variantStyles, sizeStyles, disabledStyles);

export default Button;
