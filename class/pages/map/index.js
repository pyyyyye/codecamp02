const  classmates = ["호두", "자두", "웬즈"]

export default function MapPage(){
    return(
        <div>
            {classmates.map(data => <div>{data} 귀여워</div>)}
            {/* = <div>호두 귀여워</div> <div>자두 귀여워</div> <div>웬즈 귀여워</div> */}
        </div>
    )

}