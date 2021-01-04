import React from 'react';
import styled from '@emotion/styled';
import { ColorType } from '@styles/theme/palette';
import { FontSizeType } from '@styles/theme/size';
import toEllipsis from '@styles/utils/ellipsis';

/**
 * Text styles
 */

type EllipsisConfig = {
  lines?: number;
};

interface StyledTextProps {
  color: keyof ColorType;
  fontSize: keyof FontSizeType;
  strong: boolean;
  ellipsis: boolean | EllipsisConfig;
}

const StyledText = styled.span<StyledTextProps>`
  line-height: 1.5;
  word-break: break-word;

  color: ${props => props.color && props.theme.palette.color[props.color]};
  font-size: ${props => props.fontSize && props.theme.size.fontSize[props.fontSize]};
  font-weight: ${props => (props.strong ? 'bold' : 'inherit')};

  ${({ ellipsis }) =>
    /* EllipsisConfig가 있으면 설정에 따라 적용, 만약 boolean으로 넘어오면 true만 적용 */
    typeof ellipsis === 'object' ? toEllipsis(ellipsis.lines) : ellipsis && toEllipsis()}
`;

/**
 * Text component
 */

export interface TextProps extends StyledTextProps {
  children: React.ReactText;
}

function Text({ children, ...rest }: TextProps) {
  return <StyledText {...rest}>{children}</StyledText>;
}

const defaultProps: StyledTextProps = {
  color: 'primary',
  fontSize: 'md',
  strong: false,
  ellipsis: false,
};

Text.defaultProps = defaultProps;

export default Text;
