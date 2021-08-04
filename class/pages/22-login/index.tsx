import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useContext, useState } from 'react';
import {
  IMutation,
  IMutationLoginUserArgs,
} from '../../src/commons/types/generated/types';
import { GlobalContext } from '../_app';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function SignupPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation<
    Pick<IMutation, 'loginUser'>,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      setAccessToken(result.data?.loginUser.accessToken || ''); // 타입 없으면 '' 빈문자열 넘겨줘
      // =ClobalContext에 담아라
      //   console.log(result.data?.loginUser.accessToken);
      //   alert(result.data?.loginUser.accessToken); // accessToken 보여지게

      // router.push('/22-login-success');
      router.push('/23-hoc');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호 : <input type="text" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}> 로그인하기</button>
    </>
  );
}
