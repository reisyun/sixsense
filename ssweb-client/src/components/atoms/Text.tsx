import styled from 'styled-components';
import { TypeColor } from '@styles/theme/palette';

interface StyledTextProps {
  color: keyof TypeColor;
}

const Text = styled.span<StyledTextProps>`
  line-height: 1.5;
  word-break: break-word;

  color: ${props => props && props.theme.palette.color[props.color]};
`;

export default Text;
