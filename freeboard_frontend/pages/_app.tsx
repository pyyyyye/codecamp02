import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { createUploadLink } from 'apollo-upload-client';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';

interface IContext {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState('');
  const value = {
    accessToken,
    setAccessToken,
  };
  console.log(router.pathname.includes('/signup')); // ----- market 배경이미지 때문에 추가한 부분
  const uploadLink = createUploadLink({
    // 실제 파일이 업로드 될 주소
    uri: 'http://backend02.codebootcamp.co.kr/graphql',
    Headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  const client = new ApolloClient({
    // uri: 'http://backend02.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  const checkLogin = // ----- market 배경이미지 때문에 추가한 부분
    router.pathname.includes('/login') || router.pathname.includes('/signup');

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <div // ----- market 배경이미지 때문에 추가한 부분 50~69 줄.( 67번줄 제외 )
          style={
            checkLogin
              ? {
                  backgroundImage: 'url(/market/market_bg.png)',
                  height: '100%',
                }
              : undefined
          }
        >
          <div
            style={
              checkLogin
                ? { backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100%' }
                : undefined
            }
          >
            <Component {...pageProps} />
          </div>
        </div>
        <Global styles={globalStyles} />
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
