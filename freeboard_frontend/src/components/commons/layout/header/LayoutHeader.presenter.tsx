import { Wrapper, HeaderWrap, HeaderButton } from './LayoutHeader.styles';

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <HeaderWrap>
        <HeaderButton>로그인</HeaderButton>|
        <HeaderButton>회원가입</HeaderButton>
      </HeaderWrap>
    </Wrapper>
  );
}
