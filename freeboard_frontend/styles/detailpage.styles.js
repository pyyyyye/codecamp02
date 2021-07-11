import styled from '@emotion/styled'

export const Contents = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 1602px;
    padding: 20px 100px 0px 100px;
    margin: 0 auto;
    box-shadow: 0px 0px 6px gray;
    margin-top: 100px;
`

//------ TopContentsWriter Start -------
export const TopContentsWriter = styled.div`
    width: 996px; 
    margin-top:80px;
    padding-bottom:24px;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
`
    export const WriterProfileImg = styled.div`
        width: 48px;
        height: 48px;
        background-image:url('/WriterProfileImg.png');
    `
    export const WriterInfo = styled.div`
        width:880px;
        height: 52px;
        margin-left: 16px;
    `
        export const Name = styled.h2`
        font-size: 22px;
        font-weight: 500;
        line-height: 25px;
        /* border: 1px solid black; */
        margin:0;
        `
        export const Date = styled.p`
            color: #828282;
            font-size: 15px;
            font-weight:400;
            line-height: 30px;
            /* border: 1px solid red; */
            margin:0;
        `
    export const WriterIcon = styled.div` //우측 픽토그램
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    `
        export const  LinkIcon = styled.img`
            width: 27px;
            height: 14px;
        `
        export const MapIcon = styled.img`
            width:32px;
            height: 32px;
        `
        



//------ MiddleContentsPost Start -------
export const MiddleContentsPost = styled.div`
    width: 100%;
    margin-top: 80px;
`
    export const ContentsTitle = styled.h1`
        font-size: normal;
        margin-top:0px;
        margin-bottom: 40px;
    `
    export const ContentsImage = styled.img`
        width: 100%;
        height:480px;
        background-color: skyblue;
    `
    export const ContentsText = styled.p`
        font-size: 16px;
        font-weight: 400;
        line-height: 23.68px;
        margin: 40px 0px 120px 0px;
    `
    export const ContentsVideo = styled.div`
        width:486px;
        height: 240px;
        background-image: url(/video.png);
        margin: 0 auto;
    `





//------ BottomContentsRecommend Start -------
export const BottomContentsRecommend = styled.div`
    width:  120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 163px;
`
    export const Recommendations = styled.div`
        width: 40px;
        height: 51px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `
    export const RecomImage = styled.img`
        width: 20px;
        height: 20px;
        margin: 0 auto;
    `
    export const RecomCount = styled.p`
        font-size: 18px;
        line-height: 26.64px;
        font-weight: 400;
        margin:0 auto;
        color: #ffd600;
    `
    export const DecomImage = styled.img`
        width: 22px;
        height: 22px;
        margin: 0 auto;
    `
    export const DecomCount = styled.p`
        font-size: 18px;
        line-height: 26.64px;
        font-weight: 400;
        margin:0 auto;
        color: black;
    `


