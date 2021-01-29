import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p id="copyright">&copy; 2021 filmyte.com</p>
      <div className={styles.poweredBy}>
        <p className={styles.poweredByText}>Powered by:</p>
        <ul className={styles.poweredByList}>
          <li>
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
              <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
              The Movie Database (TMDb)
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
