/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apolloClient';
import { ThemeProvider } from 'providers/ThemeProvider';
import Layout from 'components/Layout/Layout';
import 'styles/global.scss';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
