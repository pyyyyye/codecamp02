import styled from '@emotion/styled';

export const Mybutton = styled.button`
  background-color: ${(props) => (props.isActive ? 'yellow' : '')};
`;

export default function Button01(props) {
  return (
    <>
      <Mybutton type={props.type} isActive={props.isActive}>
        {props.buttonName}
      </Mybutton>
    </>
  );
}
