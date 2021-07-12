// 게시물 정보 전송 및 등록 완료
import {gql}  from '@apollo/client';


export const CREATE_BOARD = gql`
     mutation createBoard($createBoardInput: CreateBoardInput!){       
        createBoard(createBoardInput:$createBoardInput){
            _id
     }
}`