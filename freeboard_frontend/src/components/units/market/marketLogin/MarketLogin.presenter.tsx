// ---------- 중고마켓 로그인 presenter.tsx -------------
import {
  LoginContents,
  TopLogo,
  MainLoginContents,
  InputLogin,
  KeepStateLogin,
  KeepLoginText,
  GoToLogin,
  BottomJoinOrFind,
  BottomBtn,
} from './MarketLogin.styles';
import { CheckCircleOutlined } from '@ant-design/icons';
import { ChangeEvent } from 'react';

interface IProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickGoToSignup: any;
}

export default function MarketLoginUI(props: IProps) {
  return (
    <LoginContents>
      <TopLogo />
      <MainLoginContents>
        {/* ---- MainLoginContents Start ---- */}
        <InputLogin
          type="text"
          onChange={props.onChangeEmail}
          placeholder="아이디를 입력해주세요"
        />

        {/* -- 비밀번호 -- */}
        <InputLogin
          type="password"
          onChange={props.onChangePassword}
          placeholder="비밀번호를 입력해주세요"
        />

        {/* -- 로그인상태 유지 체크박스 -- */}
        <KeepStateLogin>
          <CheckCircleOutlined />
          <KeepLoginText>로그인 상태 유지 </KeepLoginText>
        </KeepStateLogin>

        {/* -- 로그인 버튼 -- */}
        <GoToLogin onClick={props.onClickLogin}>로그인하기</GoToLogin>

        {/* -- 하단 비밀번호 찾기 및 회원가입 -- */}
        <BottomJoinOrFind>
          <BottomBtn>이메일 찾기</BottomBtn>|
          <BottomBtn>비밀번호 찾기</BottomBtn>|
          <BottomBtn onClick={props.onClickGoToSignup}>회원가입</BottomBtn>
        </BottomJoinOrFind>

        {/* ---- MainLoginContents End ---- */}
      </MainLoginContents>
    </LoginContents>
  );
}
