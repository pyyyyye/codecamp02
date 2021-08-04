// ---------- 중고마켓 로그인 container.tsx -------------
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ChangeEvent, useState } from 'react';
import { GlobalContext } from '../../../../pages/_app';
import MarketLoginUI from './MarketLogin.presenter';
import { LOGIN_USER } from './MarketLogin.queries';
export default function MarketLogin() {
  // const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onClickGoToSignup(event) {
    console.log(event.target);
    router.push('/market/signup');
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      setAccessToken(result.data?.loginUser.accessToken || '');
      alert('됐다 굿');
      // router.push('')
    } catch (error) {
      alert('회원정보를 확인해주세요.');
    }
  }

  return (
    <MarketLoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickGoToSignup={onClickGoToSignup}
    />
  );
}
