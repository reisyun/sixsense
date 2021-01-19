import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { range } from '@/libs/utils';
import { PostInfoModel } from '@/libs/model';
import Text from '@/components/atoms/Text';
import Image from '@/components/atoms/Image';
import Icon from '@/components/atoms/Icon';
import Card from '@/components/molecules/Card';

const JlogCardListWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 36px 24px;
  width: 100%;
`;

const Title = styled(Text)`
  cursor: pointer;
`;

const Date = styled(Text)`
  margin-top: auto;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Avatar = styled(Image)`
  width: 24px;
  height: 24px;
`;

const UserName = styled(Text)`
  margin-left: 8px;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled(Text)`
  margin-left: 4px;
`;

export interface JlogCardListProps {
  initialCard?: Array<PostInfoModel>;
}

function JlogCardList({ initialCard = [] }: JlogCardListProps) {
  const [postInfoList, setPostInfoList] = useState<PostInfoModel[]>(initialCard);

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

    setPostInfoList(prev => [...prev, ...mock]);
  }, []);

  const cardList = postInfoList.map(({ user, title, image, date, likeCount }, idx) => {
    const KEY = `${title}-${idx}`;

    const footer = (
      <Footer>
        <UserInfo>
          <Avatar src={user.avatar} circle />
          <UserName fontSize="sm" color="secondary">
            {user.name}
          </UserName>
        </UserInfo>
        <Likes>
          <Icon icon="heart" size="small" />
          <Count fontSize="xs" color="primary">
            {likeCount}
          </Count>
        </Likes>
      </Footer>
    );

    return (
      <Card key={KEY} image={image} footer={footer}>
        <Title as="h3" fontSize="sm" color="primary" bold ellipsis={{ lines: 2 }}>
          {title}
        </Title>
        <Date fontSize="xs" color="secondary">
          {date}
        </Date>
      </Card>
    );
  });

  return <JlogCardListWrapper>{cardList}</JlogCardListWrapper>;
}

export default React.memo(JlogCardList);
