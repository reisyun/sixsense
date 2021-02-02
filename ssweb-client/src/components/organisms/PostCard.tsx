import React from 'react';
import styled from '@emotion/styled';
import { PostInfoModel } from '@/libs/model';
import Card from '@/components/molecules/Card';
import Image from '@/components/atoms/Image';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

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

export interface PostCardProps {
  info: PostInfoModel;
}

function PostCard({ info: { user, title, date, image, likeCount } }: PostCardProps) {
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
    <Card image={image} footer={footer}>
      <Title as="h3" fontSize="sm" color="primary" bold ellipsis={{ lines: 2 }}>
        {title}
      </Title>
      <Date fontSize="xs" color="secondary">
        {date}
      </Date>
    </Card>
  );
}

export default React.memo(PostCard);
