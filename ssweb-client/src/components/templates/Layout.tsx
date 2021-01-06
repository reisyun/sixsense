import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 72px 1fr;
  background: ${props => props.theme.palette.background.default};
`;

const Content = styled.main`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
`;

function Layout({ children }: { children: React.ReactChild }) {
  return (
    <Wrapper>
      <div>Header</div>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Layout;
