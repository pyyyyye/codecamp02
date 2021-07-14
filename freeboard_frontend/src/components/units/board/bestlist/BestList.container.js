//베스트 게시글 화면 container.js
import { useState } from 'react'
import {useMutation} from '@apollo/client'
import {FETCH_BOARDS, DELETE_BOARD} from './BestList.queries'
import ListPageUI from './BestList.presenter'
// import { getDate } from '.src/commons/libraries/utils.js'  날짜표시

export default function ListPage(props){
    const [] =useState()
    
    







    return(  //props로 담는 부분
        <ListPageUI
            onClickUpload={onClickUpload}
        />

    )

}