import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import Text from '@components/atoms/Text';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ width: '500px' }}>
        <Text color="main" fontSize="sm" ellipsis={{ lines: 2 }}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Text>
      </div>
    </ThemeProvider>
  );
}

export default App;
