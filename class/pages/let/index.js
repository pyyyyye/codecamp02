export default function StatePage(){

    let count = 7
    
    function aaa(){
        count = count + 1
        console.log(count)

    }

    return(
        <>
            {/* <div>0</div> */}
            
            <div id="rrr">{count}</div>
            <button onClick={aaa}>+1</button>
        </>
        
    )
}