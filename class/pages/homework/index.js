import { gql, useQuery } from '@apollo/client'
import {useRouter} from 'next/router'
import { useState } from 'react'
const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId:$boardId){
            writer
            title
            contents          
        }
    }
`

export default function DetailPage(){
    const router = useRouter()
    const {data} = useQuery(
        FETCH_BOARD,
        { variables:{ boardId: router.query.boardId } }
    )
    console.log(data)

    return( 
        <>   데이터를 불러오는 것

            <div>{data && data.fetchBoard && data.fetchBoard.writer && data && data.fetchBoard && data.fetchBoard.title}</div>
            {data?.fetchBoard?.wirter && data?.fetchBoard?.title}
            <div>작성자 {data && data.fetchProduct && data.fetchBoard.writer}님</div>     
            <div>글제목 : {data?.fetchBoard?.title}</div>
            <div>글내용 : {data && data.fetchBoard.contents}</div>

            <div>작성자 {data?.fetchProduct && data.fetchBoard.writer}님</div>     
            <div>글제목 : {data?.fetchBoard?.title}</div>
            <div>글내용 : {data?.fetchBoard.contents}</div>
            
            
            {/* <div>상세보기 {router.query.boardId}번 화면입니다.</div> */}
            data && data ~  = 데이터잇음보여주고 없음말고.
        </>
    )
} 