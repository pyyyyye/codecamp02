// ---------- 중고마켓 로그인 styles.tsx -------------
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/market/market_bg.png');
`;
export const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: relative;
`;
export const LoginContents = styled.div`
  width: 384px;
  height: 510px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid blue;
  display: flex;
  flex-direction: column;
`;
export const TopLogo = styled.div`
  width: 288px;
  height: 44px;
  border: 1px solid red;
  margin: 0 auto;
  background-image: url('/market/logo.png');
`;
export const MiddleLoginBox = styled.div`
  width: 100%;
  /* height: 64px;
  border: 1px solid #fff;
  border-radius: 16px; */
  background-color: lemonchiffon;
`;
export const InputLogin = styled.input``;
export const EmailInput = styled.div``;
export const PasswordInput = styled.div``;
export const KeepStateLogin = styled.div`
  background-color: green;
`;
export const LoginCheckIcon = styled.div`
  color: #fff;
`;
export const KeepLoginText = styled.div`
  color: #fff;
`;
export const GoToLogin = styled.div`
  height: 64px;
  background-color: #4f4f4f;
  border-radius: 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 64px;
  text-align: center;
`;
export const BottomJoinOrFind = styled.div`
  background-color: brown;
  display: flex;
  justify-content: center;
  color: #fff;
`;
export const BottomBtn = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  padding: 0 20px;
  cursor: pointer;
`;
