import React from 'react';
import styled from '@emotion/styled';
import Banner from '@/components/molecules/Banner';

const Content = styled.main`
  position: relative;
  margin: 48px auto 100px;
  padding: 0 24px;
  width: 100%;
  max-width: 1400px;
`;

interface PageTemplateProps {
  children: React.ReactElement | React.ReactElement[];
  title: string;
  description?: string;
}

function PageTemplate({ children, title, description }: PageTemplateProps) {
  return (
    <>
      <Banner title={title} description={description} />
      <Content>{children}</Content>
    </>
  );
}

PageTemplate.defaultProps = {
  description: 'Sixsense',
};

export default PageTemplate;
