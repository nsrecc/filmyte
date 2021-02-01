import React from 'react';
// import Head from 'next/head';
// import styles from 'styles/Home.module.css';
import styles from 'styles/pages/index.module.scss';

const Home = ({ data }) => {
  console.log('NODE_ENV: ', process.env.NODE_ENV);
  console.log('NEXT_PUBLIC_CLIENT_ENV: ', process.env.NEXT_PUBLIC_CLIENT_ENV);
  console.log('NEXT_PUBLIC_FILMYTE_SERVER_API_URL: ', process.env.NEXT_PUBLIC_FILMYTE_SERVER_API_URL);

  return (
    <div className={styles.mainInner}>
      {/* <Head>
        <title>Home | Filmyte</title>
      </Head> */}
      <section className={styles.titleSection}>
        <h1 className={styles.title}>Filmyte</h1>
        <h2 className={styles.subTitle}>Discover Your Movies and TV Shows</h2>
      </section>
    </div>
  );
};

export default Home;
