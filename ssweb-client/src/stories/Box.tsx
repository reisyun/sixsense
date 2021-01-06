import styled from '@emotion/styled';

export interface BoxProps {
  width?: string;
}

export const Box = styled.div<BoxProps>`
  width: ${props => props.width || '90vw'};
`;
