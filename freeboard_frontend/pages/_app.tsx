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

interface IContext {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState('');
  const value = {
    accessToken,
    setAccessToken,
  };
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

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <Global styles={globalStyles} />
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
