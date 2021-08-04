// ---------- 중고마켓 로그인 styles.tsx -------------
import styled from '@emotion/styled';
export const LoginContents = styled.div`
  width: 380px;
  height: 510px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const TopLogo = styled.div`
  width: 288px;
  height: 44px;
  margin: 0 auto;
  background-image: url('/market/logo.png');
  margin-bottom: 80px;
`;
export const MainLoginContents = styled.div`
  width: 100%;
  height: 388px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
// export const LoginBox = styled.div`
// `;
export const InputLogin = styled.input`
  height: 64px;
  border: 1px solid #fff;
  border-radius: 16px;
  background: transparent;
  color: #fff;
  padding-left: 16px;
  outline: none;
`;
export const KeepStateLogin = styled.div`
  height: 45px;
  /* border: 1px solid #fff;
  border-radius: 16px; */
  background: transparent;
  color: #fff;
  display: flex;
  flex-direction: row;
  line-height: 16px;
  /* padding-top: 3px; */
`;
export const KeepLoginText = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  margin-left: 12px;
  cursor: pointer;
`;
export const GoToLogin = styled.div`
  height: 64px;
  background-color: #4f4f4f;
  border-radius: 16px;
  text-align: center;
  line-height: 64px;
  color: #fff;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
`;
export const BottomJoinOrFind = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  padding-top: 28px;
  border-top: 1px solid;
`;
export const BottomBtn = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 13px;
  padding: 0 18px;

  cursor: pointer;
`;
