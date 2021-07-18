import styled from '@emotion/styled'

interface Iprops {
    active:boolean
}

export const MyInput = styled.input``

export const MyButton = styled.button`
    color: ${(props:Iprops) => props.active ? 'blue' : 'red'}
     /*color:${props => props.color} props준 거 그대로 가져온다.
    color:${props =>props.color}
    = color: ${(props) => "red"}
    = color:red; */
`