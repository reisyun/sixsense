import React from 'react';
import styled from '@emotion/styled';

const CardListWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 36px 24px;
  margin-top: 32px;
  width: 100%;
`;

export interface CardListTemplateProps {
  cards: React.ReactElement | React.ReactElement[];
}

function CardListTemplate({ cards }: CardListTemplateProps) {
  return <CardListWrapper>{cards}</CardListWrapper>;
}

export default CardListTemplate;
