import React from 'react';
import Sticky from 'react-stickynode';
import Logo from '../../UiElements/Logo/Logo';
// import SvgIcon from '../../UiElements/SvgIcon/SvgIcon';
import Container from '../../UiElements/Container/Container';
import MainMenu from '../HeaderMenu/MainMenu/MainMenu';
import AvatarMenu from '../HeaderMenu/AvatarMenu/AvatarMenu';
import HeaderWrapper, {
  TopBar,
  MenuRight,
  Navbar,
  StickyNav,
  NavLeft,
  NavRight,
} from './DefaultHeader.styled';
// import avatar from "../../../../public/images/avatar.jpg";
import LogoIcon from '../../../../public/images/logo.svg';

const DefaultHeader: React.FC = () => {
  return (
    <HeaderWrapper className="default">
      <Container>
        <TopBar className="top-bar">
          <Logo path="/" src={<LogoIcon />} />
          <MenuRight className="menu-right">
            {/* <TopMenu /> */}
            <AvatarMenu name="Jane Doe" src={'images/avatar.jpg'} />
          </MenuRight>
        </TopBar>
      </Container>

      <Sticky>
        <Navbar className="navbar">
          <Container>
            <StickyNav>
              <NavLeft>
                <Logo path="/" src={<LogoIcon />} />
                <MainMenu className="main-nav" />
              </NavLeft>
              <NavRight className="cart-and-avatar">
                <AvatarMenu name="Jane Doe" src={'images/avatar.jpg'} />
              </NavRight>
            </StickyNav>
          </Container>
        </Navbar>
      </Sticky>
    </HeaderWrapper>
  );
};

export default DefaultHeader;
