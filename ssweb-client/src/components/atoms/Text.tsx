import React, { ReactText } from 'react';
import styled, { css } from 'styled-components';
import { TypeColor } from '@styles/theme/palette';
import { TypeFontSize } from '@styles/theme/size';
import toEllipsis from '@styles/utils/ellipsis';

type EllipsisConfig = {
  lines?: number;
};

interface StyledTextProps {
  color?: keyof TypeColor;
  fontSize?: keyof TypeFontSize;
  strong?: boolean;
  ellipsis?: boolean | EllipsisConfig;
}

const StyledText = styled.span<StyledTextProps>`
  line-height: 1.5;
  word-break: break-word;

  ${({ theme, color, fontSize, strong }) => css`
    color: ${color && theme.palette.color[color]};
    font-size: ${fontSize && theme.size.fontSize[fontSize]};
    font-weight: ${strong && 'bold'};
  `}

  /* EllipsisConfig에서 라인을 설정 가능 */
  ${({ ellipsis }) => `
    ${typeof ellipsis === 'object' ? toEllipsis(ellipsis.lines) : toEllipsis()}
  `}
`;

interface TextProps extends StyledTextProps {
  children: ReactText;
}

function Text({ children, ellipsis, ...restProps }: TextProps) {
  return (
    <StyledText {...restProps} ellipsis={ellipsis}>
      {children}
    </StyledText>
  );
}

const defaultProps: StyledTextProps = {
  color: 'primary',
  fontSize: 'md',
  strong: false,
  ellipsis: false,
};

Text.defaultProps = defaultProps;

export default Text;
