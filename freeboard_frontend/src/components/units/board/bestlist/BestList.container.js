//베스트 게시글 화면 container.js
import { useQuery} from '@apollo/client'
import {FETCH_BOARDS} from './BestList.queries'
import ListPageUI from './BestList.presenter'
// import { getDate } from '.src/commons/libraries/utils.js'  날짜표시

export default function ListPage(props){
    const { data } = useQuery(FETCH_BOARDS)
    
    const onClickUpload =()=>{}

    return(  //props로 담는 부분
        <ListPageUI
            onClickUpload={onClickUpload}
            data={data}
        />

    )

}