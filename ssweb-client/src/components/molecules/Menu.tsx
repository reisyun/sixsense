import React from 'react';
import styled from '@emotion/styled';
import MenuItem from '@/components/molecules/MenuItem';

const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`;

export interface MenuProps {
  children: React.ReactNode | React.ReactNode[];
}

function Menu({ children }: MenuProps) {
  return <MenuBlock>{children}</MenuBlock>;
}

Menu.Item = MenuItem;

export default Menu;
