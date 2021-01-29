import React from 'react';
import Head from 'next/head';
// import styles from 'styles/about.module.css';

const About = ({ data }) => {
  // console.log('NODE_ENV: ', process.env.NODE_ENV);
  // console.log('NEXT_PUBLIC_CLIENT_ENV: ', process.env.NEXT_PUBLIC_CLIENT_ENV);
  // console.log('NEXT_PUBLIC_FILMYTE_SERVER_API_URL: ', process.env.NEXT_PUBLIC_FILMYTE_SERVER_API_URL);

  return (
    <>
      {/* <Head>
        <title>Home | Filmyte</title>
      </Head> */}

      <p>About</p>
    </>
  );
};

export default About;
