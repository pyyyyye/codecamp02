import axioshdfhmdfh2342356436 from 'axios'

import { useState } from "react";
import { Header, Wrapper, Contents, LogoBox, ItsLogoBox, ItsLogo, ItsLogoShadow, Title, InfoBox,LoginBox, InputBox, InfoMenu, InfoMenuBox, LoginButtonBox, ErrorM, Bar, KakaoBox, KakaoLogo, KakaoTitle, KakaoButtonBox} from "../../styles/homework/login.styles"

export default function FirstPage(){
    const [Email, setEmail] = useState('')
    const [Pw, setPw] = useState('')
    const [EmailError, setEmailError] = useState('')
    const [PwError, setPwError] = useState('')

    function emailButton(evnt){ setEmail(evnt.target.value) }
    function pwButton(evnt){ setPw(evnt.target.value) }

    function LoginButtonBox2(){
        if(Email!==""){setEmailError('')}
        if(Pw!==""){setPwError('')}

        if(Email===""){setEmailError('이메일 주소를 다시 확인해주세요.')}
        if(Pw===""){setPwError('8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다..')}
    }
    return(
      <Wrapper>
        <Header></Header>
        <Contents>
            <LogoBox>
                <ItsLogoBox>
                    <ItsLogoShadow src="/homework/rectangle@3x.png"/>
                    <ItsLogo src="/homework/img-100-logo-white@3x.png"/>
                </ItsLogoBox>
                
                <Title>잇츠로드</Title>
            </LogoBox>
                
            <InfoBox>
                <LoginBox>
                    <InputBox type='text'  onChange={emailButton}placeholder='이메일을 입력해주세요.' />
                    <ErrorM>{EmailError}</ErrorM>
                </LoginBox>
                <LoginBox>
                     <InputBox type='password' onChange={pwButton}placeholder='비밀번호를 입력해주세요.' />
                     <ErrorM>{PwError}</ErrorM>
                </LoginBox>

                <LoginBox>
                    <LoginButtonBox onClick={LoginButtonBox2}>
                        로그인
                    </LoginButtonBox>
                </LoginBox>
                <InfoMenuBox>
                    <InfoMenu> 이메일 찾기</InfoMenu>
                    <Bar>|</Bar>
                    <InfoMenu> 비밀번호 찾기</InfoMenu>
                    <Bar>|</Bar>
                    <InfoMenu> 회원가입 </InfoMenu>
                </InfoMenuBox>

                <LoginBox>
                    <KakaoButtonBox>
                        <KakaoBox>
                         <KakaoLogo src="/homework/kakaoLogo.png" /> 
                        <KakaoTitle>카카오톡으로 로그인</KakaoTitle>
                        </KakaoBox>
                    </KakaoButtonBox>
                </LoginBox>
            </InfoBox>

        </Contents>
      </Wrapper>
    )
}