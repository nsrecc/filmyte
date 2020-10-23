/* eslint-disable */
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) { // eslint-disable-line react/prop-types
  return <Component {...pageProps} />; // eslint-disable-line react/jsx-props-no-spreading
}

export default MyApp;
