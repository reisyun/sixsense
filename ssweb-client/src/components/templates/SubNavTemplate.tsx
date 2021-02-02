import React from 'react';
import styled from '@emotion/styled';

const SubNavWrapper = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export interface SubNavTemplateProps {
  children: React.ReactElement;
}

function SubNavTemplate({ children }: SubNavTemplateProps) {
  return <SubNavWrapper>{children}</SubNavWrapper>;
}

export default SubNavTemplate;
