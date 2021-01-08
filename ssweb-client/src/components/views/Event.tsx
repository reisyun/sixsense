import React from 'react';
import Category from '@/components/organisms/Category';
import EventCardList from '@/components/organisms/EventCardList';
import PageTemplate from '@/components/templates/PageTemplate';

function Event() {
  return (
    <PageTemplate title="J2KB 이벤트" description="세미나/컨퍼런스 정보를 쉽게 탐색해보세요!">
      <Category />
      <EventCardList />
    </PageTemplate>
  );
}

export default Event;
