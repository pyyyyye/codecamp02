import styled from '@emotion/styled'
const MyImg = styled.img`
    width: 100px;
    height: 100px;
    position: relative;
`
const MyImg2 = styled.img`
    width: 30px; 
    height: 30px;
    border: 2px solid red;
    position: absolute;
    top:0;
    left:0;
`
const MyDiv = styled.div`
    width: 100px;
    height: 100px;
    /* background-color: beige; */
    background-image: url("/mypage/img-60-profile-image@3x.png");
    background-size: 100%;
`
const Background = styled.img`
    width: 70px;
    height: 86px;
    position: relative;
`
const BackgroundTrans = styled.div`  //MyImg에 어두운효과.
    background-color: rgba(0,0,0,0.4);
    width: 60px;
    height: 30px;
    position: absolute;
    top:0;
    left:0;
`
export default function ImagePage(){
    return(
        <>
            <MyImg src="/mypage/img-60-profile-image@3x.png" />
            <MyImg2 src="/mypage/f_sns_youtube.png" />
            <MyDiv/>
            <Background src="/mypage/img-60-profile-image@3x.png"/>
            <BackgroundTrans/>  {/* MyImg에  어두운효과. */}
        </>
    )
}