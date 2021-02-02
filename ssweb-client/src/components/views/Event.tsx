import React, { useState, useEffect } from 'react';
import { EventInfoModel } from '@/libs/model';
import PageTemplate from '@/components/templates/PageTemplate';
import SubNavTemplate from '@/components/templates/SubNavTemplate';
import CardListTemplate from '@/components/templates/CardListTemplate';
import Category from '@/components/molecules/Category';
import EventCard from '@/components/organisms/EventCard';

function Event() {
  const [infoList, setInfoList] = useState<EventInfoModel[]>([]);

  useEffect(() => {
    const mock: Array<EventInfoModel> = [
      {
        image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
        title: 'hello world',
        date: '2021년 1월 13일',
        category: 'dataScience',
      },
      {
        image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
        title: 'hello world',
        date: '2021년 1월 13일',
        category: 'Flutter',
      },
      {
        image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
        title: 'hello world',
        date: '2021년 1월 13일',
        category: 'Swift',
      },
    ];

    setInfoList(mock);
  }, []);

  const categories = infoList.map(info => info.category);

  const cardList = infoList.map((info, idx) => {
    const KEY = `${info.title}-${idx}`;
    return <EventCard key={KEY} info={info} />;
  });

  return (
    <PageTemplate title="J2KB 이벤트" description="세미나/컨퍼런스 정보를 쉽게 탐색해보세요!">
      <SubNavTemplate>
        <Category items={categories} />
      </SubNavTemplate>
      <CardListTemplate cards={cardList} />
    </PageTemplate>
  );
}

export default Event;
