import styled from '@emotion/styled'


export const Wrapper = styled.div`
    width: 640px;
    height: 1138px;
    align-items: center;    
    background-image:url("/homework/img-bg@3x.png");
    background-size: 100%;
    position: relative;
    top: 0; left:0;
`

export const Header = styled.div`
    width: 100%;
    height: 40px;
    background-color: rgba( 0, 0, 0, 0.3);
    position: relative; 
    left:0;
    top:0;
    display: flex;
    margin-left:0;s
`

export const Contents = styled.div`
    width: 100%;
    height:1109px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const LogoBox = styled.div`
    width:180px;
    height: 170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
export const ItsLogoBox = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 auto;
`

export const ItsLogoShadow = styled.img`
    width:65px;
    height: 18px;
    position: relative;
    top: 80px;
    left: 50px;
    transform : translate(-50%,0);
`

export const ItsLogo = styled.img`
    width:100px;
    height: 100px;
    position: absolute;
    top: 0px;
    left: 0px;
`

export const Title = styled.h1`
    color: #fff;
    font-size:44px;
    margin:0;
`

// InfoBox 시작
export const InfoBox = styled.div`
     width: 100%;
     height: 590px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
`
export const LoginBox = styled.div`
     width: 540px;
     height: 76px;
 `
export const InputBox = styled.input`
    width: 100%;
    height: 100%;
    background: none;
    border:0px;
    border-bottom: 1px solid #fff;
    color:#fff;
    font-size: 18px;
`
export const ErrorM = styled.div`
    color: #ff1b6d;
    padding-top:5px;
    font-size: 14px;
`

export const LoginButtonBox = styled.button`
    width:100%;
    height:100%;
    border: 0px;
    border-radius: 38px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`
export const InfoMenuBox = styled.div`
    width: 540px;
    height: 64px;
    display: flex;
    flex-direction: row;
    text-align: center;
`
export const InfoMenu = styled.button`
    height:20px;
    margin: 0 auto;
    margin-top:20px;
    font-size: 18px;
    letter-spacing: normal;
    background:transparent;
    border: 0;
    color: #fff;
`
export const Bar = styled.span`
    color: #fff;
    opacity: 50%;
    margin-top:20px;
`
export const KakaoButtonBox = styled.button`
    width:100%;
    height:100%;
    border: 2px solid #fae100;
    border-radius: 38px;
    opacity: 100%;
    background-color: transparent;
    /* font-weight:600;
    /* color:#fae100; 
    font-size: 22px; */
`
export const KakaoBox = styled.div`
    width: 245px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`
export const KakaoLogo = styled.img`
    width: 30px;
    height: 30px;
`
export const KakaoTitle = styled.div`
    width: 200px;
    height: 30px;
    font-size:20px;
    color: #fae100;
`