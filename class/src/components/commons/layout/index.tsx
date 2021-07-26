import LayoutHeader from './header/LayoutHeader.container';
import LayoutFooter from './footer/LayoutFooter.presenter';
import LayoutBanner from './banner/LayoutBanner.container';
import LayoutNavigation from './navigation/LayoutNavigation.presenter';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Body = styled.div`
  height: 500px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IProps {
  children: ReactNode;
}
export default function Layout(props: IProps) {
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
