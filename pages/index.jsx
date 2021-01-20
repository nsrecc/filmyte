import React from 'react';
import fetch from 'cross-fetch';
import { ApolloClient,ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

const Home = ({ data }) => {
  // console.log('NODE_ENV: ', process.env.NODE_ENV);
  // console.log('NEXT_PUBLIC_CLIENT_ENV: ', process.env.NEXT_PUBLIC_CLIENT_ENV);
  // console.log('NEXT_PUBLIC_FILMYTE_SERVER_API_URL: ', process.env.NEXT_PUBLIC_FILMYTE_SERVER_API_URL);

  const client = new ApolloClient({
    // Pass cross-fetch into HttpLink's constructor for environments that do not include 'fetch'
    link: new HttpLink({ uri: 'http://localhost:4000/api/graphql', fetch }), // local dev route
    cache: new InMemoryCache(),
    // ssrMode: true,
  });

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to Filmyte!
          </h1>
        </main>
      </div>
    </ApolloProvider>
  );
};

export default Home;
