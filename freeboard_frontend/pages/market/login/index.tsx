// ---------- 중고마켓 로그인 index.tsx -------------
import MarketLogin from '../../../src/components/units/market/marketLogin/MarketLogin.container';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-image: url('/market/market_bg.png'); */
`;
export const ContentsWrap = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.8); */
  position: relative;
`;

export default function MarketLoginPage() {
  return (
    <Wrapper>
      <ContentsWrap>
        <MarketLogin />
      </ContentsWrap>
    </Wrapper>
  );
}
