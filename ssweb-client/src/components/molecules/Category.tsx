import React, { useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { unique } from '@/libs/utils';
import Tag from '@/components/atoms/Tag';

const CategoryWrapper = styled.div`
  position: relative;
  display: flex;

  & > div {
    margin-right: 8px;
  }
`;

const StyledTag = styled(Tag)`
  cursor: pointer;
`;

export interface CategoryProps {
  items: string[];
}

const CATEGORY_ALL = 'ALL' as const;

function Category({ items }: CategoryProps) {
  const [active, setActive] = useState<string>(CATEGORY_ALL);

  // EventInfo의 중복된 category를 제거 후 배열로 반환
  const categories = useMemo(() => {
    return unique(items);
  }, [items]);

  // 클릭한 대상의 innerText를 setactive에 전달
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const categoryName = event.currentTarget.textContent as string;
    setActive(categoryName);
  }, []);

  return (
    <CategoryWrapper>
      <StyledTag active={active === CATEGORY_ALL} onClick={handleClick}>
        {CATEGORY_ALL}
      </StyledTag>
      {categories.map(name => (
        <StyledTag key={name} active={active === name} onClick={handleClick}>
          {name}
        </StyledTag>
      ))}
    </CategoryWrapper>
  );
}

export default Category;
