import React from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import theme from '@styles/theme';
import global from '@styles/global';
import Text from '@components/atoms/Text';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <div style={{ width: '500px' }}>
        <Text color="secondary" ellipsis={{ lines: 2 }}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen
          book.
        </Text>
      </div>
    </ThemeProvider>
  );
}

export default App;
