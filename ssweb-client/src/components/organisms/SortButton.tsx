import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dropdown from '@/components/molecules/Dropdown';
import Menu from '@/components/molecules/Menu';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

const SortButtonWrapper = styled.div`
  position: relative;
  padding-top: 16px;
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  padding: 0;
`;

export interface SortButtonProps {
  items: Array<string>;
}

function SortButton({ items }: SortButtonProps) {
  const [localValue, setLocalValue] = useState<string>(items[0]);

  const overlay = (
    <Menu>
      {items.map(item => (
        <Menu.Item key={item} onClick={() => setLocalValue('test')}>
          {item}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <SortButtonWrapper>
      <Dropdown overlay={overlay}>
        <StyledButton>
          <Icon icon="sort" />
          <Text color="secondary">{localValue}</Text>
        </StyledButton>
      </Dropdown>
    </SortButtonWrapper>
  );
}

export default SortButton;
