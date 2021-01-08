import React, { useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { unique } from '@/libs/utils';
import { EventInfoModel } from '@/libs/model';
import Tag from '@/components/atoms/Tag';

const CategoryBlock = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 32px;

  & > div {
    margin-right: 8px;
  }
`;

const StyledTag = styled(Tag)`
  cursor: pointer;
`;

export interface CategoryProps {
  children: React.ReactElement | React.ReactElement[];
}

const mock: Array<EventInfoModel> = [
  {
    title: 'hello world',
    category: 'dataScience',
  },
  {
    title: 'hello world',
    category: 'frontEnd',
  },
];

const CATEGORY_ALL = 'ALL' as const;

function Category() {
  const [category] = useState<EventInfoModel[]>(mock);
  const [select, setSelect] = useState<string>(CATEGORY_ALL);

  // EventInfo의 중복된 category를 제거 후 배열로 반환
  const categories = useMemo(() => {
    return unique(category.map(c => c.category));
  }, [category]);

  // 클릭한 대상의 innerText를 setSelect에 전달
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const categoryName = event.currentTarget.textContent as string;
    setSelect(categoryName);
  }, []);

  return (
    <CategoryBlock>
      <StyledTag active={select === CATEGORY_ALL} onClick={handleClick}>
        {CATEGORY_ALL}
      </StyledTag>
      {categories.map(name => (
        <StyledTag key={name} active={select === name} onClick={handleClick}>
          {name}
        </StyledTag>
      ))}
    </CategoryBlock>
  );
}

export default Category;
