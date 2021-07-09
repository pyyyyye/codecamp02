export default function State2Page(){
    
    let count = 7

    function 함수(){
        // alert('클릭완료')
        count=count+1 // = count += 1
        // alert(count)
        document.getElementById('aaa').innerText = count
        
    }
    
    return(
        <>
            <div id="aaa">{count}</div>
            <button onClick={함수}>+1</button>
        </>
    )
}