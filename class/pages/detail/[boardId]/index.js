import { gql, useQuery } from '@apollo/client'
import {useRouter} from 'next/router'
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
        { variables:{ boardId: router.query.boardId } } //앞에 boardId를 detail 이동 페이지 폴더명과 같게 해줘야함.
    )
    console.log(data)

    return( 
        <>           
            <div>작성자 {data && data.fetchBoard.writer}님</div>     
            <div>글제목 : {data && data.fetchBoard.title}</div>
            <div>글내용 : {data && data.fetchBoard.contents}</div>
{/* 
            <div>작성자 {data?.fetchBoard.writer}님</div>     
            <div>글제목 : {data?.fetchBoard.title}</div>
            <div>글내용 : {data?.fetchBoard.contents}</div> */}
            {/* <div>상세보기 {router.query.boardId}번 화면입니다.</div> */}
            {/* data && data ~  = 데이터잇음보여주고 없음말고. */}
        </>
    )
} 