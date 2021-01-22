import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>&copy; 2021 filmyte.com</li>
        <li>
          Powered by:
          <ul className={styles.poweredBy}>
            <li>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
              </a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                The Movie Database (TMDb)
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
