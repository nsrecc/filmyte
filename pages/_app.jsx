/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apolloClient';
import { GlobalProvider } from 'providers/GlobalProvider/GlobalProvider';
import { ThemeProvider } from 'providers/ThemeProvider/ThemeProvider';
import Layout from 'components/Layout/Layout';
import 'styles/global.scss';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default MyApp;
