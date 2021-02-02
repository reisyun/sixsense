import React from 'react';
import styled from '@emotion/styled';
import { capitalize } from '@/libs/utils';
import { EventInfoModel } from '@/libs/model';
import Card from '@/components/molecules/Card';
import Text from '@/components/atoms/Text';
import Tag from '@/components/atoms/Tag';

const Date = styled(Text)``;
const Title = styled(Text)`
  margin-top: 4px;
`;

export interface EventCardProps {
  info: EventInfoModel;
}

function EventCard({ info: { title, date, image, category } }: EventCardProps) {
  const tag = (
    <Tag size="small" active>
      {capitalize(category)}
    </Tag>
  );

  return (
    <Card image={image} footer={tag}>
      <Date fontSize="xs" color="secondary">
        {date}
      </Date>
      <Title as="h3" fontSize="sm" color="primary" bold ellipsis={{ lines: 2 }}>
        {title}
      </Title>
    </Card>
  );
}

export default React.memo(EventCard);
