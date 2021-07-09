import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

export default function ApolloPage(){
    const [seller, setSeller] = useState()
    const [productName, setProductName]= useState()
    const [productDetail, setProductDetail] = useState()
    const [productPrice, setProductPrice] = useState()

    function onChangeSeller(event){
        setSeller(event.target.value)
    }
    function onChangeProductName(event){
        setProductName(event.target.value)
    }
    function onChangeProductDetail(event){
        setProductDetail(event.target.value)
    }
    function onChangeProductPrice(event){
        setProductPrice(event.target.value)
    }

    const [aiaiai]=useMutation(
        gql`
             mutation zzzzzzzzzzz(
                    $aaa: String,
                    $bbb: CreateProductInput!
                ){  createProduct(
                        seller:$aaa,
                        createProductInput: $bbb
                    ){  _id
                        message
                }
            }
        `
    )

    function onClickSubmit(){
        aiaiai({
                variables:{
                    aaa: seller,
                    bbb:{
                        name: productName,
                        detail:productDetail,
                        price:Number(productPrice)
                    }
                }
        })
    }   

        return (
        <>
            <div></div>
            판매자: <input type="text" onChange={onChangeSeller} />
            상품명: <input type="text" onChange={onChangeProductName} />
            상품상세: <input type="text" onChange={onChangeProductDetail} />
            가격: <input type="text" onChange={onChangeProductPrice} />
            <button onClick={onClickSubmit}>데이터 입력하기</button>

        </>
    )
    
}



// async function onClickSubmit(){
//         try{
//             const hodoojadoo = await uploadbutton({
//                 variables : {
//                     aaa:writer,
//                     bbb:password,
//                     ccc:title,
//                     xxx:contents
//                 }
//             })
//             // console.log(hodoojadoo.data.createBoard.message)
//             alert(hodoojadoo.data.createBoard.message)
//         }   catch(error){
//             alert(error)//error 팝업창 뜸. 
//         }
//     }