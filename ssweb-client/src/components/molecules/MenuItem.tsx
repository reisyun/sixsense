import React from 'react';
import styled from '@emotion/styled';
import Text from '@/components/atoms/Text';

const MenuItemBlock = styled.div`
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

export interface MenuItemProps {
  children: string;
  onClick?: React.MouseEventHandler;
}

function MenuItem({ children }: MenuItemProps) {
  return (
    <MenuItemBlock>
      <Text fontSize="sm">{children}</Text>
    </MenuItemBlock>
  );
}

export default MenuItem;
