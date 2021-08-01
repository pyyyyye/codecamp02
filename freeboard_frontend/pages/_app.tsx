import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { createUploadLink } from 'apollo-upload-client';

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    // 실제 파일이 업로드 될 주소
    uri: 'http://backend02.codebootcamp.co.kr/graphql',
  });
  const client = new ApolloClient({
    // uri: 'http://backend02.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
