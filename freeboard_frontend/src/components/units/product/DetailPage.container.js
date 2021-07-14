//=== 게시물 상세페이지 conatiner.js ===


import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {FETCH_BOARD} from './DetailPage.queries'
import DetailPageUI from './DetailPage.presenter'


export default function DetailPage(){
        const router = useRouter() 
        const {data} = useQuery(
            FETCH_BOARD,{
                variables:{
                    boardId: router.query.boardId 
                }}
        )
            return (
                <DetailPageUI  onDetail={data} />
        )
}