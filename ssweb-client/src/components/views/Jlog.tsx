import React from 'react';
import JlogCardList from '@/components/organisms/JlogCardList';
import PageTemplate from '@/components/templates/PageTemplate';
import Tabs from '@/components/molecules/Tabs';

function Jlog() {
  return (
    <PageTemplate
      title="J2KB 블로그"
      description="J2KB의 맴버들의 포스트를 한 플랫폼에 담았습니다!"
    >
      <Tabs items={['명예의 전당', 'JLOG']} />
      <JlogCardList />
    </PageTemplate>
  );
}

export default Jlog;
