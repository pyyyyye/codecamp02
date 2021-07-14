
export default function BoardDetailUI(props){
    return(    // 상세화면에서 props를 쓰는 예시-----------------------
        <>           
            {/* <div>작성자 {data && data.fetchBoard.writer}님</div>     
            <div>글제목 : {data && data.fetchBoard.title}</div>
            <div>글내용 : {data && data.fetchBoard.contents}</div> */}
             
            <div>작성자 {props.qqq?.fetchBoard.writer}님</div>     
            <div>글제목 : {props.qqq?.fetchBoard.title}</div>
            <div>글내용 : {props.qqq?.fetchBoard.contents}</div> 
            <button onClick={props.onClickEdit} active={props.active}>수정하기</button>
            {/* {!props.isEdit && <button onClick={props.onClickEdit} active={props.active}>데이터입력하기</button>}  */}

            {/* <Mybox>상세보기 {router.query.boardId}번 화면입니다.</Mybox> */}
            {/* data && data ~  = 데이터잇음보여주고 없음말고.   */}
        </>

    )


}       
            
            
