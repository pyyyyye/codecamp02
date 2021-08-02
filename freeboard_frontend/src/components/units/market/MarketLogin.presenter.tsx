// ---------- 중고마켓 로그인 presenter.tsx -------------
import { MiddleContentsPost } from '../product/DetailPage.styles';
import {
  Wrapper,
  LoginWrap,
  LoginContents,
  TopLogo,
  MiddleLoginBox,
  InputLogin,
  KeepStateLogin,
  LoginCheckIcon,
  KeepLoginText,
  GoToLogin,
  BottomJoinOrFind,
  BottomBtn,
} from './MarketLogin.styles';

export default function MarketLoginUI() {
  return (
    <Wrapper>
      <LoginWrap>
        <LoginContents>
          <TopLogo />
          <MiddleLoginBox>
            <InputLogin value="text" placeholder="아이디를 입력해주세요" />
            <InputLogin
              value="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <KeepStateLogin>
              <LoginCheckIcon>흥</LoginCheckIcon>
              <KeepLoginText>로그인 상태 유지</KeepLoginText>
            </KeepStateLogin>
            <GoToLogin>로그인하기</GoToLogin>
          </MiddleLoginBox>
          <BottomJoinOrFind>
            <BottomBtn>이메일 찾기</BottomBtn>|
            <BottomBtn>비밀번호 찾기</BottomBtn>|<BottomBtn>회원가입</BottomBtn>
          </BottomJoinOrFind>
        </LoginContents>
      </LoginWrap>
    </Wrapper>
  );
}
