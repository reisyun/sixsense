import React from 'react';
import styled from '@emotion/styled';
import Header, { HEADER_HEIGHT } from '@/components/organisms/Header';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr;
  background: ${props => props.theme.palette.background.default};
`;

/**
 * 모든 페이지에 항상 보이고 싶은 컴포넌트를 이곳에 삽입
 */
function Layout({ children }: { children: React.ReactChild }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default Layout;
