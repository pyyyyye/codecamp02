import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import Layout from '../src/components/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';

import firebase from 'firebase/app';
import 'firebase/firestore';

if (typeof window !== 'undefined') {
  firebase.initializeApp({
    apiKey: 'AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8',
    authDomain: 'codecamp-01.firebaseapp.com',
    databaseURL: 'http://codecamp-01.firebaseio.com',
    projectId: 'codecamp-01',
    storageBucket: 'codecamp01.appspot.com',
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://backend02.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
export default MyApp;
