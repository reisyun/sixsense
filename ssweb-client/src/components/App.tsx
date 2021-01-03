import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import Text from '@components/atoms/Text';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Text color="primary">fdsa</Text>
    </ThemeProvider>
  );
}

export default App;
