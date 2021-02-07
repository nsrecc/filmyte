import React from 'react';
import { useThemeContext } from 'providers/ThemeProvider';
import styles from './Footer.module.scss';

const Footer = () => {
  const { themeIsLight } = useThemeContext();

  const vercelSvgSrc = themeIsLight ? '/icons/vercel.svg' : '/icons/vercel-white.svg';

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p id="copyright">&copy; 2021 filmyte.com</p>
        <div className={styles.poweredBy}>
          <p className={styles.poweredByText}>Powered by:</p>
          <ul className={styles.poweredByList}>
            <li>
              <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.vercelLogo}
                  id="vercel-logo"
                  alt="Vercel Logo"
                  src={vercelSvgSrc}
                />
              </a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                The Movie Database (TMDb)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
