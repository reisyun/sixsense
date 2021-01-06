import React from 'react';
import styled from '@emotion/styled';
import Card from '@/components/molecules/Card';
import Text from '@/components/atoms/Text';
import Tag from '../atoms/Tag';

const EventCardListWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 32px 16px;
  width: 100%;
`;

const Date = styled(Text)``;
const Title = styled(Text)`
  margin-top: 4px;
`;

export interface EventCardListProps {
  data: Array<{
    title: string;
    image?: string;
    date?: string;
  }>;
}

function EventCardList({ data }: EventCardListProps) {
  const mockTag = () => (
    <Tag size="small" color="dataScience">
      Example
    </Tag>
  );

  const cardList = data.map(({ title, image, date }) => (
    <Card key={title} image={image} footer={mockTag()}>
      <Date fontSize="xs" color="secondary">
        {date}
      </Date>
      <Title fontSize="sm" color="primary" ellipsis={{ lines: 2 }} bold>
        {title}
      </Title>
    </Card>
  ));

  return <EventCardListWrapper>{cardList}</EventCardListWrapper>;
}

export default React.memo(EventCardList);
