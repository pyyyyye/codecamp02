import { Wrapper, NaviWrap, NaviButton } from './LayoutNavigation.styles';

export default function LayoutNavigationUI() {
  return (
    <Wrapper>
      <NaviWrap>
        <NaviButton>자유게시판</NaviButton>|<NaviButton>중고 마켓</NaviButton>|
        <NaviButton>마이 페이지</NaviButton>
      </NaviWrap>
    </Wrapper>
  );
}
