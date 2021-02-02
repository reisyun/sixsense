import React, { useState, useEffect } from 'react';
import { range } from '@/libs/utils';
import { PostInfoModel } from '@/libs/model';
import PageTemplate from '@/components/templates/PageTemplate';
import SubNavTemplate from '@/components/templates/SubNavTemplate';
import CardListTemplate from '@/components/templates/CardListTemplate';
import PostCard from '@/components/organisms/PostCard';
import SortButton from '@/components/organisms/SortButton';
import Tabs from '@/components/molecules/Tabs';

function Jlog() {
  const [infoList, setInfoList] = useState<PostInfoModel[]>([]);

  // TODO: hooks로 만들기
  useEffect(() => {
    const mock: Array<PostInfoModel> = range(8).map(() => ({
      image: 'https://source.unsplash.com/Yn7NXC5SFQo/300x300',
      title: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
      date: '2021년 1월 12일',
      likeCount: 32,
      user: {
        avatar: 'https://source.unsplash.com/526rqevhDuA/300x300',
        name: 'reisyun',
      },
    }));

    setInfoList(mock);
  }, []);

  const cardList = infoList.map((info, idx) => {
    const KEY = `${info.title}-${idx}`;
    return <PostCard key={KEY} info={info} />;
  });

  return (
    <PageTemplate
      title="J2KB 블로그"
      description="J2KB의 맴버들의 포스트를 한 플랫폼에 담았습니다!"
    >
      <SubNavTemplate>
        <Tabs items={['명예의 전당', 'JLOG']} />
      </SubNavTemplate>

      <SortButton items={['최신순', '주간 인기순', '월간 인기순']} />

      <CardListTemplate cards={cardList} />
    </PageTemplate>
  );
}

export default Jlog;
