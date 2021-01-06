import React from 'react';
import styled from '@emotion/styled';
import Image from '@/components/atoms/Image';
import Divider from '@/components/atoms/Divider';

const CardItemBlock = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.12);
`;

const Cover = styled.div`
  position: relative;
  padding-top: 56.5%;
  width: 100%;
`;

const Poster = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  margin-top: 12px;
  padding: 0 16px 16px;
  min-height: 120px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 16px;
`;

export interface CardProps {
  children: React.ReactNode;
  image?: string;
  footer?: React.ReactNode;
}

function Card({ children, image, footer }: CardProps) {
  const renderImage = () => (
    <Cover>
      <Poster src={image} alt="lala" />
    </Cover>
  );

  const renderFooter = (footer: React.ReactNode) => (
    <>
      <Divider />
      <Footer>{footer}</Footer>
    </>
  );

  return (
    <CardItemBlock>
      {image && renderImage()}
      <Content>{children}</Content>
      {footer && renderFooter(footer)}
    </CardItemBlock>
  );
}

export default React.memo(Card);
