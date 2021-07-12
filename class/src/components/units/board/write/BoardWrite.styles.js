import styled from '@emotion/styled'

export const MyInput = styled.input``

export const MyButton = styled.button`
    color: ${props => props.active ? 'red' : 'blue'}
     /*color:${props => props.color} props준 거 그대로 가져온다.
    color:${props =>props.color}
    = color: ${(props) => "red"}
    = color:red; */
`