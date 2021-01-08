import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { size } from 'polished';
import { routes } from '@/libs/routes';
import { UserModel } from '@/libs/model';
import { useScrollDown } from '@/hooks/useScrollDown';
import Image from '@/components/atoms/Image';
import logo from '@/assets/images/sixsense-logo.png';

export const HEADER_HEIGHT = 72;

const HeadertWrapper = styled.header<{ hide: boolean }>`
  z-index: 999;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: ${props => props.theme.palette.background.default};
  transition: 0.4s;

  ${props => props.hide && `transform: translateY(-${HEADER_HEIGHT}px);`}
`;

const Logo = styled(Image)`
  width: 120px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  padding: 0 16px;
`;

const Link = styled(NavLink)`
  display: inline-block;
  line-height: 72px;
  color: ${props => props.theme.palette.color.primary};
  text-decoration: none;
`;

const avatarStyles = css`
  margin-left: 16px;
  ${size(32)}
  border-radius: 50%;
`;

const Avatar = styled(Image)`
  ${avatarStyles}
`;

const NoAvatar = styled.div`
  ${avatarStyles}
  background: ${props => props.theme.palette.divider};
`;

function Header() {
  const hide: boolean = useScrollDown();

  const user: UserModel = {
    avatar: undefined,
    name: 'reisyun',
  };

  const link = routes.map(({ path, name }) => (
    <NavItem key={path}>
      <Link to={path}>{name}</Link>
    </NavItem>
  ));

  return (
    <HeadertWrapper hide={hide}>
      <Logo src={logo} />
      <Nav>
        <NavList>{link}</NavList>
        {user?.avatar ? <Avatar src={user?.avatar} alt={user.name} /> : <NoAvatar />}
      </Nav>
    </HeadertWrapper>
  );
}

export default Header;
