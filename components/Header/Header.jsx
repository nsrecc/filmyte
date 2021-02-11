/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link'; // Wraps <a> elements
import { useThemeContext } from 'providers/ThemeProvider/ThemeProvider';
import { Sun, Moon } from 'phosphor-react';
import styles from './Header.module.scss';

const Header = () => {
  const { themeIsLight, toggleTheme } = useThemeContext();

  // Props for dark mode button icon
  const iconProps = {
    color: themeIsLight ? '#000000' : '#ffffff',
    size: '1.5em',
    weight: 'bold',
  };

  /* eslint-disable react/jsx-props-no-spreading */
  const themeIcon = themeIsLight ? <Moon {...iconProps} /> : <Sun {...iconProps} />;
  /* eslint-enable react/jsx-props-no-spreading */

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/">
          <a className={styles.headerLogoLink}>
            <span className={styles.filmyteLogo}>Filmyte</span>
          </a>
        </Link>
        <div className={styles.headerEnd}>
          <nav className={styles.navWrapper}>
            <ul className={styles.navList}>
              <li>
                <Link href="/search">
                  <a>Search</a>
                </Link>
              </li>
              <li>
                <Link href="/discover">
                  <a>Discover</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className={styles.themeButton}
            type="button"
            id="theme-toggle"
            onClick={toggleTheme}
          >
            {themeIcon}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
