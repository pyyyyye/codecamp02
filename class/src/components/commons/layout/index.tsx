import LayoutHeader from './header/LayoutHeader.container';
import LayoutFooter from './footer/LayoutFooter.presenter';
import LayoutBanner from './banner/LayoutBanner.container';
import LayoutNavigation from './navigation/LayoutNavigation.presenter';
import styled from '@emotion/styled';

const Body = styled.div`
  height: 500px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Layout(props: any) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>
        <div style={{ backgroundColor: 'yellow' }}>
          사이드메뉴 컴포넌트입니다.
        </div>
        <Body>{props.children}</Body>
      </Wrapper>
      <LayoutFooter />
    </>
  );
}
