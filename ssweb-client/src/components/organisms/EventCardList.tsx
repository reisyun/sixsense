import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { capitalize, range } from '@/libs/utils';
import { EventInfoModel } from '@/libs/model';
import Text from '@/components/atoms/Text';
import Tag from '@/components/atoms/Tag';
import Card from '@/components/molecules/Card';

const EventCardListWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 36px 24px;
  width: 100%;
`;

const Date = styled(Text)``;
const Title = styled(Text)`
  margin-top: 4px;
`;

export interface EventCardListProps {
  initialCard?: Array<EventInfoModel>;
}

function EventCardList({ initialCard = [] }: EventCardListProps) {
  const [eventInfoList, setEventInfoList] = useState<EventInfoModel[]>(initialCard);

  useEffect(() => {
    const mock: Array<EventInfoModel> = range(8).map(() => ({
      image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
      title: 'hello world',
      date: '2021년 1월 12일',
      category: 'dataScience',
    }));

    setEventInfoList(prev => [...prev, ...mock]);
  }, []);

  const cardList = eventInfoList.map(({ title, image, date, category }, idx) => {
    const KEY = `${title}-${idx}`;

    const tag = (
      <Tag size="small" active>
        {capitalize(category)}
      </Tag>
    );

    return (
      <Card key={KEY} image={image} footer={tag}>
        <Date fontSize="xs" color="secondary">
          {date}
        </Date>
        <Title as="h3" fontSize="sm" color="primary" bold ellipsis={{ lines: 2 }}>
          {title}
        </Title>
      </Card>
    );
  });

  return <EventCardListWrapper>{cardList}</EventCardListWrapper>;
}

export default React.memo(EventCardList);
