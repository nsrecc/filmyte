import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
// import styles from './Layout.scss'

/**
 * The Layout component wraps all the pages with:
 * - Head - a common/default head for html <head> code
 * - Header - Filmyte header with navbar
 * - Main page - content of each page
 * - Footer - Filmyte footer
 */
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
