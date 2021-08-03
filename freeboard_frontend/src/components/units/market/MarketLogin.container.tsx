// ---------- 중고마켓 로그인 container.tsx -------------
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ChangeEvent, useState } from 'react';
import { GlobalContext } from '../../../../pages/_app';
import MarketLoginUI from './MarketLogin.presenter';
import { LOGIN_USER } from './MarketLogin.queries';

// import { CheckCircleOutlined } from '@ant-design/icons';

export default function MarketLogin() {
  // const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_USER);

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
    />
  );
}
