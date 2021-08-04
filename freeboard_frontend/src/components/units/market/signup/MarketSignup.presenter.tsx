// ======= 중고마켓 회원가입 | market signup presenter =======
import {
  SignupWrapper,
  TopTitle,
  InputSignup,
  SingupLabel,
  InputBox,
  SignupError,
  GoToSignup,
} from './MarketSignup.styles';

export default function MarketSignupUI(props) {
  return (
    <SignupWrapper>
      <TopTitle>회원가입</TopTitle>

      {/* ---- MainSignupContents Start ---- */}
      <InputBox>
        <SingupLabel>이름</SingupLabel>
        <InputSignup
          name="name"
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={props.onChangeSignupInput}
        />
        <SignupError>{props.inputError.name}</SignupError>
      </InputBox>
      <InputBox>
        <SingupLabel>이메일</SingupLabel>
        <InputSignup
          name="email"
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={props.onChangeSignupInput}
        />
        <SignupError>{props.inputError.email}</SignupError>
      </InputBox>
      <InputBox>
        <SingupLabel>비밀번호</SingupLabel>
        <InputSignup
          name="password"
          type="password"
          placeholder="비밀번호를입력해주세요"
          onChange={props.onChangeSignupInput}
        />
        <SignupError>{props.inputError.password}</SignupError>
      </InputBox>
      <InputBox>
        <SingupLabel>비밀번호 확인</SingupLabel>
        <InputSignup
          id="SignupPasswordAgain"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={props.onChangePasswordAginInput}
        />
        <SignupError>{props.inputError.password}</SignupError>
      </InputBox>

      {/* -- 회원가입 버튼 -- */}
      <GoToSignup onClick={props.onClickSignup}>회원가입하기</GoToSignup>
    </SignupWrapper>
  );
}
