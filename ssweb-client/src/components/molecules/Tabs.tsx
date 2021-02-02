import React from 'react';
import styled from '@emotion/styled';
import { useTabs } from '@/hooks/useTabs';
import Text from '@/components/atoms/Text';

const TabsBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TabItem = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  max-width: 200px;
  width: 100%;
  cursor: pointer;
`;

interface TabsProps {
  items: Array<string>;
}

function Tabs({ items }: TabsProps) {
  const [currentTab, setCurrentIndex] = useTabs(items);

  const tabItem = items.map((name, idx) => (
    <TabItem
      key={name}
      as="div"
      fontSize="xl"
      onClick={() => setCurrentIndex(idx)}
      bold={name === currentTab}
    >
      {name}
    </TabItem>
  ));

  return <TabsBlock>{tabItem}</TabsBlock>;
}

export default Tabs;
