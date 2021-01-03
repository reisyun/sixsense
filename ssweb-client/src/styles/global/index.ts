import { createGlobalStyle } from 'styled-components';
import { reset } from '@styles/global/reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
