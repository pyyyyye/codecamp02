import { useRouter } from 'next/router';
import { ComponentType, useContext, useEffect } from 'react';
import { GlobalContext } from '../_app';

export default function ExamplePage() {
  return <div>접근에 성공했습니다.</div>;
}
// 새로고침하거나 하면 accesstoken이 없기 때문에 html이랑 그리지 않고 페이지 사라짐.

// eslint-disable-next-line react/display-name
const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      alert('로그인이 필요한 페이지입니다.');
      router.push('/22-login');
    }
  }, []);

  return <Component {...props} />;
};
