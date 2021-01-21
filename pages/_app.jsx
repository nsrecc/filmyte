/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apolloClient';
// import Layout from 'components/Layout';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ApolloProvider>
  );
}

export default MyApp;
