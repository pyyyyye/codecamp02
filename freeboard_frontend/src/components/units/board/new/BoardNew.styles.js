//게시물 등록화면 연결 .styles
import styled from '@emotion/styled'

export const Wrapper = styled.div``

export const Title = styled.h1`
    width: 100%;
    height: 100px;
    background-color: yellow;
    font-size: 20px;
    text-align:center;
    margin:0;
    margin-bottom: 40px;
`
export const Contents = styled.div`
    max-width: 1200px;
    width:100%;
    padding: 30px 100px 0px 100px;
    margin: 0 auto;
    height: 1847px;
    /* background-color: lemonchiffon; */
    box-shadow: 0px 0px 6px gray;
`
export const SubTitle = styled.h2`
    text-align: center;
    margin-top:40px;
    padding-bottom: 40px;
`
export const MyInput = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    height:92px;
    margin-bottom: 50px;
    /* border: 1px solid red; */
`
export const TopBox = styled.div`
    width: 486px;
`
export const Categorize = styled.h5`
    font-size: 15px;
    margin: 0;
    padding-bottom: 16px;
`
export const InputBox = styled.input`
    border: 1px solid lightgray;
    height:52px;
    width: 100%;
    padding-left:16px;
    display: block;
`
export const ErrorM = styled.div`
    color: red;
    padding : 10px 0 0 17px;
    font-size: 13px;
`

export const LongInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`


export const ContBox = styled.div`
    width: 100%;
    height: 520px;
    /* border: 1px solid red; */
    margin-bottom: 40px;
`
export const ContInput = styled.textarea`
    width: 100%;
    height:480px;
    padding-left: 16px;
    padding-top: 16px;
    border: 1px solid lightgray;
`

export const AddressBox = styled.div`
    width: 100%;
    height: 242px;
    margin-bottom: 50px;
    /* border: 1px solid red; */
`
export const AddressNumInput = styled.input`
    width:77px;
    height: 52px;
    margin-right: 16px;
    padding-left: 16px;
    border: 1px solid lightgray;
`
export const AddressButton = styled.button`
    width:124px;
    height: 52px;
    background-color: black;
    color: white;
`

export const AddressInput = styled.input`
    width: 100%;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    border: 1px solid lightgray;

`

export const PhotoBox = styled.div`
    width: 282px;
    height: 118px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

`
export const UploadBox = styled.div`
    display: flex;
    justify-content: space-between;
    
`
export const SmallBox = styled.label`
    width: 78px;
    height: 78px;
    background-color: #bdbdbd;
    text-align: center;
    padding-top: 18px;
`

export const LoadButton = styled.input`  //파일업로드 input박스 숨김
    display: none;
`

export const RadioBox = styled.div`
    width:159px;
    height:64px;
`
export const RadioButton = styled.div``

export const Button1 = styled.input`
    margin-left: 10px;
`

export const ButtonBox = styled.button`
    width: 179px;
    height:52px;
    //제목, 글쓴, 비번, 내용 채우면 버튼 색 변환.
    background-color: ${(props) => props.active ? '#ffd600;' : 'lemonchiffon'};
    /* border: 1px solid lightgray; */
    display: block;
    margin: 50px auto 0;
    
`