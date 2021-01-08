import React from 'react';
import { size } from 'polished';
import styled from '@emotion/styled';
import { range } from '@/libs/utils';
import Text from '@/components/atoms/Text';

const BannerBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 480px;
  background: ${props => props.theme.palette.color.white};
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Decorate = styled.div`
  display: inline-flex;
`;

const Circle = styled.div`
  margin: 8px;
  ${size(12)}
  background: ${props => props.theme.palette.color.main};
  border-radius: 50%;

  &:nth-of-type(even) {
    background: #fed330;
  }
`;

const Title = styled(Text)`
  font-size: 48px;
`;
const Description = styled(Text)`
  margin-top: 8px;
`;

export interface BannerProps {
  title: string;
  description?: string;
}

function Banner({ title, description }: BannerProps) {
  const decorate = range(3).map(num => <Circle key={num} />);

  return (
    <BannerBlock>
      <TitleGroup>
        <Decorate>{decorate}</Decorate>
        <Title as="h1" color="primary" bold>
          {title}
        </Title>
        <Description as="p" fontSize="lg" color="secondary">
          {description}
        </Description>
      </TitleGroup>
    </BannerBlock>
  );
}

Banner.defaultProps = {
  description: 'Sixsense',
};

export default Banner;
