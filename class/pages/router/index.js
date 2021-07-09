//페이지와 페이지 사이 이동하는 방법 
import {useRouter} from 'next/router'

export default function RouterPage(){
    const router = useRouter()

    function onClickMove(){
        router.push('/detail/4')
    }

    return (
        <button onClick={onClickMove}>버튼을 누르면 페이지를 이동합니다.</button>
    )

}