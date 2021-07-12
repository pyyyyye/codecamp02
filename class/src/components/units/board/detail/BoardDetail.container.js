
import { useQuery } from '@apollo/client'
import {useRouter} from 'next/router'
import BoardDetailUI from "./BoardDetail.presenter"
import { FETCH_BOARD } from './BoardDetail.queries'

export default function BoardDetail(){
    const router = useRouter()
    const {data} = useQuery(
        FETCH_BOARD,
        { variables:{ boardId: router.query.boardId } }
        //앞에 boardId를 detail 이동 페이지 폴더명과 같게 해줘야함.
    )
     return( <BoardDetailUI qqq={data}/> ) 
     //qqq=key, data=value useQuery서 받아온거.
}
