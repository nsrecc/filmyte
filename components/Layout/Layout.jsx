import React from 'react';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
// import styles from './Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* <meta charset="utf-8" /> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Filmyte | Discover Your Movies and TV Shows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </>
  );
};

export default Layout;
