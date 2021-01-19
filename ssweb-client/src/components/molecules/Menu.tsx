import React from 'react';
import styled from '@emotion/styled';
import Text from '@/components/atoms/Text';

const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`;

const MenuItem = styled.div`
  display: inline-flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 24px;
  width: 100%;
  height: 36px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.palette.overlay.hover};
  }
`;

export interface MenuProps {
  items: Array<string>;
}

function Menu({ items }: MenuProps) {
  const menuItems = items.map(item => (
    <MenuItem key={item}>
      <Text fontSize="sm">{item}</Text>
    </MenuItem>
  ));

  return <MenuBlock>{menuItems}</MenuBlock>;
}

export default Menu;
