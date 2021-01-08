import React from 'react';
import JlogCardList from '@/components/organisms/JlogCardList';
import PageTemplate from '@/components/templates/PageTemplate';

function Jlog() {
  return (
    <PageTemplate
      title="J2KB 블로그"
      description="J2KB의 맴버들의 포스트를 한 플랫폼에 담았습니다!"
    >
      <JlogCardList />
    </PageTemplate>
  );
}

export default Jlog;
