import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

const Home = ({ data }) => {
  console.log('NODE_ENV: ', process.env.NODE_ENV);
  console.log('NEXT_PUBLIC_CLIENT_ENV: ', process.env.NEXT_PUBLIC_CLIENT_ENV);
  console.log('NEXT_PUBLIC_FILMYTE_SERVER_API_URL: ', process.env.NEXT_PUBLIC_FILMYTE_SERVER_API_URL);

  return (
    <>
      <Head>
        {/* <title>Filmyte | Discover Your Movies and TV Shows</title> */}
      </Head>

      <p className={styles.title}>Welcome to Filmyte!</p>
    </>
  );
};

export default Home;
